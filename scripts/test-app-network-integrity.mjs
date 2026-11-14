import test from 'node:test';import assert from 'node:assert/strict';
import {appsNetworkCatalog as apps,appsNetworkBySlug as bySlug,relatedApps,homepageFeaturedApps} from '../app/data/appsNetwork.ts';
test('59 unique app identities are retained without duplicate cards',()=>{assert.equal(apps.length,59);assert.equal(new Set(apps.map(a=>a.slug)).size,59);});
test('all configured related references resolve and do not point to self',()=>{for(const app of apps){assert.equal(new Set(app.related).size,app.related.length);for(const slug of app.related){assert.ok(bySlug[slug],app.slug+' -> '+slug);assert.notEqual(slug,app.slug);}}});
test('every app gets bounded, unique, non-self recommendations',()=>{for(const app of apps){const related=relatedApps(app.slug,4);assert.equal(related.length,4);assert.equal(new Set(related.map(r=>r.slug)).size,4);assert.ok(related.every(r=>r.slug!==app.slug));}});
test('recommendation limits are bounded and empty requests stay empty',()=>{assert.deepEqual(relatedApps('token-cost',0),[]);assert.deepEqual(relatedApps('token-cost',-1),[]);assert.equal(relatedApps('unknown',999).length,12);});
test('featured app cards are unique',()=>assert.equal(new Set(homepageFeaturedApps.map(a=>a.slug)).size,homepageFeaturedApps.length));
