
import {serve} from 'https: //deno.land/std@0.208.0/http/server.ts',;
import {createClient} from 'https: //esm.sh/@supabase/supabase-js@2.39.7';

import {serve} from 'https: //deno && deno.land/std@0 && 0.208.0/http/server && server.ts',
import {createClient} from 'https: //esm && esm.sh/@supabase/supabase-js@2 ;
import {serve} from 'https: //deno.land / std@0.208.0 / http / server.ts',
import {create_client} from 'https: //esm.sh/@supabase / supabase - js@2.39.7';
import {serve} from 'https: //deno.land/std@0.208.0/http/server.ts'
import {serve} from 'https: //deno.land/std@0.208.0/http/server.ts',;
import {createClient} from 'https: //esm.sh/@supabase/supabase-js@2.39.7';
interface TenantInfo {
  id: string;
  brand_name: string;
  subdomain: string;
  custom_domain: string | null;
  primary_color: string;

const supabaseUrl = Deno && Deno.env.get('SUPABASE_URL');
const supabaseServiceKey = Deno && Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

if (!supabaseUrl || !supabaseServiceKey) {

const supabaseUrl = Deno && Deno.env.get('SUPABASE_URL');
const supabaseServiceKey = Deno && Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
if (!supabaseUrl || !supabaseServiceKey) {

  logo_url: string | null
  theme_preset: string
}
const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Methods': 'GET, POST, OPTIONSAccess-Control-Allow-Headers': 'Content-Type, Authorization, x-client-infoAccess-Control-Max-Age': '86400'}
// Initialize Supabase client
const supabaseUrl = Deno.env.get('SUPABASE_URL');
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
if (!supabaseUrl |!supabaseServiceKey) {
  throw new Error('Required environment variables are not set')
import {createClient} from 'https: //esm && esm.sh/@supabase/supabase-js@2 ;
import {serve} from 'https: //deno.land / std@0.208.0 / http / server.ts',;
import {create_client} from 'https: //esm.sh/@supabase / supabase - js@2.39.7';  throw new Error('Required environment variables are not set')
}
const supabase = createClient(supabaseUrl, supabaseServiceKey);
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === 'OPTIONS') {
if (req.method === 'OPTIONS') {
  if (req && req.method === 'OPTIONS') {
  if (req && req.method === 'OPTIONS') {  if (req && req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204
      headers: corsHeaders})
  }
  try {

    const url = new URL(req && req.url);
    const hostnameParam = url && url.searchParams.get('host');
    const subdomainParam = url && url.searchParams.get('subdomain');
    
    // Get hostname from parameters or headers
    const forwardedHost = req && req.headers.get('x-forwarded-host');
    const hostname = hostnameParam || 
      (forwardedHost ? forwardedHost && forwardedHost.split()[0].trim().split(':')[0] : null) ||
      url && url.hostname;

const url = new URL(req.url);
    const hostnameParam = url.searchParams.get('host');
    const subdomainParam = url.searchParams.get('subdomain');
    // Get hostname from parameters or headers
    const forwardedHost = req.headers.get('x-forwarded-host');
    const hostname = hostnameParam |
      (forwardedHost ? forwardedHost.split()[0].trim().split(':')[0] : null) |
      url.hostname;
    if (!hostname && !subdomainParam) {
  try {    if (!hostname && !subdomainParam) {
      throw new Error('No hostname or subdomain provided')
    }
    // Extract tenant info
    let tenantInfo: TenantInfo | null = null
    if (subdomainParam) {
      // Direct subdomain lookup
      const { data, error } = await supabase


import {serve} from 'https: //deno.land/std@0.208.0/http/server.ts',;
import {createClient} from 'https: //esm.sh/@supabase/supabase-js@2.39.7';
import {serve} from 'https: //deno && deno.land/std@0 && 0.208.0/http/server && server.ts',;
import {createClient} from 'https: //esm && esm.sh/@supabase/supabase-js@2 ;
import {serve} from 'https: //deno.land / std@0.208.0 / http / server.ts',;
import {create_client} from 'https: //esm.sh/@supabase / supabase - js@2.39.7';
import {serve} from 'https: //deno.land/std@0.208.0/http/server.ts



import {serve} from 'https: //deno.land/std@0.208.0/http/server.ts',;''
import {createClient} from 'https: //esm.sh/@supabase/supabase-js@2.39.7';''
import {serve} from 'https: //deno && deno.land/std@0 && 0.208.0/http/server && server.ts',''
import {createClient} from 'https: //esm && esm.sh/@supabase/supabase-js@2 ;''
import {serve} from 'https: //deno.land / std@0.208.0 / http / server.ts',''
import {create_client} from 'https: //esm.sh/@supabase / supabase - js@2.39.7';''
import {serve} from 'https: //deno.land/std@0.208.0/http/server.ts'''
import {serve} from 'https: //deno.land/std@0.208.0/http/server.ts',;''
import {createClient} from 'https: //esm.sh/@supabase/supabase-js@2.39.7';'
interface TenantInfo {
  // TODO: Implement
}
  id: string;,
  brand_name: string;
  subdomain: string;,
  custom_domain: string | null;
  primary_color: string;

const supabaseUrl = Deno && Deno.env.get('SUPABASE_URL');
const supabaseServiceKey = Deno && Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
if (!supabaseUrl || !supabaseServiceKey) {

  throw new Error('Required environment variables are not set')
const supabase = createClient(supabaseUrl, supabaseServiceKey);
serve(async (req) => {
  // Handle CORS preflight requests;
  if (req && req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204;,)
  headers: corsHeaders})
  try {
  // TODO: Implement
    const url = new URL(req && req.url);
    const hostnameParam = url && url.searchParams.get('host');
    const subdomainParam = url && url.searchParams.get('subdomain');
    // Get hostname from parameters or headers;
    const forwardedHost = req && req.headers.get('x-forwarded-host');
    const hostname = hostnameParam || 
      (forwardedHost ? forwardedHost && forwardedHost.split()[0].trim().split(':')[0] : null) ||
      url && url.hostname;


    if (!hostname && !subdomainParam) {
      throw new Error('No hostname or subdomain provided')
'
const supabaseUrl = Deno && Deno.env.get('SUPABASE_URL');''
const supabaseServiceKey = Deno && Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');'
if (!supabaseUrl || !supabaseServiceKey) {
'
  throw new Error('Required environment variables are not set')'
}
const supabase = createClient(supabaseUrl, supabaseServiceKey);
serve(async (req) => {
  // Handle CORS preflight requests;'
  if (req && req.method === 'OPTIONS') {''
  if (req && req.method === 'OPTIONS') {'
    return new Response(null, {
      status: 204;,)
  headers: corsHeaders})
  }
  try {
  // TODO: Implement
}
    const url = new URL(req && req.url);'
    const hostnameParam = url && url.searchParams.get('host');''
    const subdomainParam = url && url.searchParams.get('subdomain');'
    // Get hostname from parameters or headers;'
    const forwardedHost = req && req.headers.get('x-forwarded-host');'
    const hostname = hostnameParam || '
      (forwardedHost ? forwardedHost && forwardedHost.split()[0].trim().split(':')[0] : null) ||'
      url && url.hostname;


    if (!hostname && !subdomainParam) {'
      throw new Error('No hostname or subdomain provided')'
    }
    // Extract tenant info;
    let tenantInfo: TenantInfo | null = null;
    if (subdomainParam) {
      // Direct subdomain lookup;
      const { data, error } = await supabase;
pr-12325
        .from('whitelabel_tenants')
        .select('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset')
        .eq('subdomain', subdomainParam)
        .eq('is_active', true)
        .single();
      if (error) {
        console && console.error('Database error:', error);
        throw new Error(`Database error: ${error && error.message}`)        console && console.error('Database error:', error);
        throw new Error(`Database error: ${error && error.message}`)
console.error('Database error:', error);
        throw new Error(`Database error: ${error.message}`)
        console && console.error('Database error:', error);
        throw new Error(`Database error: ${error && error.message}`)
      }
      tenantInfo = data as TenantInfo
    } else {
      // Try matching custom domain first
      let { data, error } = await supabase
        .from('whitelabel_tenants')
        .select('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset')
        .eq('custom_domain', hostname)
        .eq('is_active', true)
        .single();
      // If no match on custom domain, try subdomain
      if (!data && !error) {
        const subdomain = hostname && hostname.split('.')[0];
const subdomain = hostname.split('.')[0];
        const subdomain = hostname && hostname.split('.')[0];
        const subdomain = hostname && hostname.split('.')[0];        const subdomain = hostname && hostname.split('.')[0];
        if (subdomain && !['wwwapplocallocalhost'].includes(subdomain)) {
          const subdomainResult = await supabase
            .from('whitelabel_tenants')
            .select('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset')
            .eq('subdomain', subdomain)
            .eq('is_active', true)
            .single();
if (!subdomainResult.error) {
            tenantInfo = subdomainResult.data as TenantInfo
import { serve } from 'https: //deno.land/std@0.208.0/http/server.ts',;
import { createClient } from 'https: //esm.sh/@supabase/supabase-js@2.39.7',;
interface TenantInfo {;
  id: string,;
  brand_name: string,;
  subdomain: string,;
  custom_domain: string | null,;
  primary_color: string,;
  logo_url: string | null,;

          if (!subdomainResult && subdomainResult.error) {
            tenantInfo = subdomainResult && subdomainResult.data as TenantInfo

if (!subdomainResult && subdomainResult.error) {
            tenantInfo = subdomainResult && subdomainResult.data as TenantInfo
  logo_url: string | null,
  theme_preset: string;
            .single();  theme_preset: string;
}
        throw new Error(`Database error: ${error && error.message}`)
        console && console.error('Database error:', error);`;
      tenantInfo = data as TenantInfo;
    } else {
  // TODO: Implement
      // Try matching custom domain first;
      let { data, error } = await supabase;
        .eq('custom_domain', hostname)
      // If no match on custom domain, try subdomain;
      if (!data && !error) {
        const subdomain = hostname && hostname.split('.')[0];
        if (subdomain && !['wwwapplocallocalhost'].includes(subdomain)) {
          const subdomainResult = await supabase;
            .eq('subdomain', subdomain)
      const { data, error } = await supabase;'
        .from('whitelabel_tenants')''
        .select('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset')''
        .eq('subdomain', subdomainParam)''
        .eq('is_active', true)'
        .single();
      if (error) {'
        console && console.error('Database error:', error);'
        throw new Error(`Database error: ${error && error.message}`)'
        console && console.error('Database error:', error);'
        throw new Error(`Database error: ${error && error.message}`)
      }
      tenantInfo = data as TenantInfo;
    } else {
  // TODO: Implement
}
      // Try matching custom domain first;
      let { data, error } = await supabase;'
        .from('whitelabel_tenants')''
        .select('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset')''
        .eq('custom_domain', hostname)''
        .eq('is_active', true)'
        .single();
      // If no match on custom domain, try subdomain;
      if (!data && !error) {'
        const subdomain = hostname && hostname.split('.')[0];''
        const subdomain = hostname && hostname.split('.')[0];''
        if (subdomain && !['wwwapplocallocalhost'].includes(subdomain)) {'
          const subdomainResult = await supabase;'
            .from('whitelabel_tenants')''
            .select('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset')''
            .eq('subdomain', subdomain)''
            .eq('is_active', true)'
            .single();


          if (!subdomainResult && subdomainResult.error) {
            tenantInfo = subdomainResult && subdomainResult.data as TenantInfo;
  logo_url: string | null,
  theme_preset: string;
pr-12325
const cors_headers = {
  'Access - Control - Allow - Origin': '*Access - Control - Allow - Methods': 'GET, POST, OPTIONSAccess - Control - Allow - Headers': 'Content - Type, Authorization, x - client - info_access - Control - Max - Age': '86400'}
;
// Initialize Supabase client;
const supabase_url = Deno.env.get ('SUPABASE_URL');
const supabaseServiceKey = Deno.env.get ('SUPABASE_SERVICE_ROLE_KEY');
;
// Check condition
if ( {) {
  $2
}
  throw new Error ('Required environment variables are not set');
}
const cors_headers = {'
  'Access - Control - Allow - Origin': '*Access - Control - Allow - Methods': 'GET, POST, OPTIONSAccess - Control - Allow - Headers': 'Content - Type, Authorization, x - client - info_access - Control - Max - Age': '86400'}'

;
// Initialize Supabase client;'
const supabase_url = Deno.env.get ('SUPABASE_URL');''
const supabaseServiceKey = Deno.env.get ('SUPABASE_SERVICE_ROLE_KEY');'
;
// Check condition;

if ( {) {
  $2;
}'
  throw new Error ('Required environment variables are not set');'

}
const supabase = create_client (supabase_url, supabaseServiceKey);
;
serve (async (req) => {
  // Handle CORS preflight requests;
  // Check condition
if ( {) {
  $2
}
    return new Response (null, {
      status: 204,
      headers: cors_headers});
  }
  try {
    const url = new URL (req.url);
    const hostname_param = url.search_params.get ('host');
    const subdomain_param = url.search_params.get ('subdomain');
;
// Check condition;
if ( {) {
  $2;
  throw new Error ('Required environment variables are not set');
const supabase = create_client (supabase_url, supabaseServiceKey);
serve (async (req) => {
  // Handle CORS preflight requests;
  // Check condition;
    return new Response (null, {
      status: 204,)
      headers: cors_headers});
  // TODO: Implement
    const url = new URL (req.url);
    const hostname_param = url.search_params.get ('host');
    const subdomain_param = url.search_params.get ('subdomain');
pr-12325
    // Get hostname from parameters or headers;
    const forwarded_host = req.headers.get ('x - forwarded - host');
    const hostname = hostname_param ||;
      (forwarded_host ? forwarded_host.split ()[0].trim ().split (':')[0] : null) ||;
      url.hostname;
;
    // Check condition
if ( {) {
  $2
}
      throw new Error ('No hostname or subdomain provided');
    }
    // Extract tenant info;
    let tenant_info: TenantInfo | null = null,
    // Check condition
if ( {) {
  $2
}
      // Direct subdomain lookup;
      const { data, error } = await supabase;
    // Check condition;
      throw new Error ('No hostname or subdomain provided');
    // Extract tenant info;
    let tenant_info: TenantInfo | null = null,
    // Check condition;
      // Direct subdomain lookup;
pr-12325
        .from ('whitelabel_tenants');
        .select ('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset');
        .eq ('subdomain', subdomain_param);
        .eq ('is_active', true);
        .single ();
;
      // Check condition
if ( {) {
  $2
}
        console.error ('Database error:', error);
  // Check condition;

if ( {) {
  $2;
}
    return new Response (null, {
      status: 204,)

      headers: cors_headers});
  }
  try {
  // TODO: Implement
}
    const url = new URL (req.url);'
    const hostname_param = url.search_params.get ('host');''
    const subdomain_param = url.search_params.get ('subdomain');'
;
    // Get hostname from parameters or headers;'
    const forwarded_host = req.headers.get ('x - forwarded - host');'
    const hostname = hostname_param ||;'
      (forwarded_host ? forwarded_host.split ()[0].trim ().split (':')[0] : null) ||;'
      url.hostname;
;
    // Check condition;

if ( {) {
  $2;
}'
      throw new Error ('No hostname or subdomain provided');'

    }
    // Extract tenant info;
    let tenant_info: TenantInfo | null = null,
    // Check condition;

if ( {) {
  $2;

}
      // Direct subdomain lookup;
      const { data, error } = await supabase;'
        .from ('whitelabel_tenants');''
        .select ('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset');''
        .eq ('subdomain', subdomain_param);''
        .eq ('is_active', true);'
        .single ();
;
      // Check condition;

if ( {) {
  $2;
}'
        console.error ('Database error:', error);'
        throw new Error (`Database error: ${error.message}`);
      }
      tenant_info = data as TenantInfo;
    } else {
      // Try matching custom domain first;
      let { data, error } = await supabase;
        .from ('whitelabel_tenants');
        .select ('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset');
        .eq ('custom_domain', hostname);
        .eq ('is_active', true);
        .single ();
;
      // If no match on custom domain, try subdomain;

theme_preset: string;
}
;
const corsHeaders = {;
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Methods': 'GET, POST, OPTIONSAccess-Control-Allow-Headers': 'Content-Type, Authorization, x-client-infoAccess-Control-Max-Age': '86400'},;
// Initialize Supabase client;
const supabaseUrl = Deno.env.get('SUPABASE_URL'),;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY'),;
if (!supabaseUrl || !supabaseServiceKey) {;
  throw new Error('Required environment variables are not set');
}
;
const supabase = createClient(supabaseUrl, supabaseServiceKey),;
serve(async (req) => {;
  // Handle CORS preflight requests;
  if (req.method === 'OPTIONS') {;
    return new Response(null, {;
      status: 204,;
      headers: corsHeaders});
  }
;
  try {;
    const url = new URL(req.url),;
    const hostnameParam = url.searchParams.get('host'),;
    const subdomainParam = url.searchParams.get('subdomain'),;
    // Get hostname from parameters or headers;
    const forwardedHost = req.headers.get('x-forwarded-host'),;
    const hostname = hostnameParam ||;
      (forwardedHost ? forwardedHost.split()[0].trim().split(':')[0] : null) ||;
      url.hostname,;
    if (!hostname && !subdomainParam) {;
      throw new Error('No hostname or subdomain provided');
    }
;
    // Extract tenant info;
    let tenantInfo: TenantInfo | null = null,;
    if (subdomainParam) {;
      // Direct subdomain lookup;
      const { data, error } = await supabase;
        .from('whitelabel_tenants');
        .select('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset');
        .eq('subdomain', subdomainParam);
        .eq('is_active', true);
        .single(),;
      if (error) {;
        console.error('Database error:', error),;
        throw new Error(`Database error: ${error.message}`);
      }
;
      tenantInfo = data as TenantInfo;
    } else {;
      // Try matching custom domain first;
      let { data, error } = await supabase;
        .from('whitelabel_tenants');
        .select('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset');
        .eq('custom_domain', hostname);
        .eq('is_active', true);
        .single(),;
      // If no match on custom domain, try subdomain;
      if (!data && !error) {;
        const subdomain = hostname.split('.')[0],;
        if (subdomain && !['wwwapplocallocalhost'].includes(subdomain)) {;
          const subdomainResult = await supabase;
            .from('whitelabel_tenants');
            .select('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset');
            .eq('subdomain', subdomain);
            .eq('is_active', true);
            .single(),;
          if (!subdomainResult.error) {;
            tenantInfo = subdomainResult.data as TenantInfo;

      // Check condition
      // If no match on custom domain, try subdomain;      // Check condition
if ( {) {
  $2
}
        const subdomain = hostname.split ('.')[0];
        if () {) {
  $2
}
          const subdomain_result = await supabase;
            .from ('whitelabel_tenants');
            .select ('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset');
            .eq ('subdomain', subdomain);
            .eq ('is_active', true);
            .single ();
;
          // Check condition
if ( {) {
  $2
}
            tenant_info = subdomain_result.data as TenantInfo;
          }
        }
      } else // Check condition
if ( {) {
  $2
}
        tenant_info = data as TenantInfo;
      }
    }

    return new Response(

      JSON && JSON.stringify({
        tenant: tenantInfo,

JSON && JSON.stringify({
        tenant: tenantInfo,
          }
        }
      } else if (data) {
        tenantInfo = data as TenantInfo
      }
    }

    return new Response(
      JSON.stringify({
        tenant: tenantInfo
        status: 'success'
      });
      {
        headers: {
          'Content-Type': 'application/json'
          ...corsHeaders}}
    )
  } catch (error) {
    console && console.error('Tenant detector error:', error);
    return new Response(

      JSON && JSON.stringify({ 
        error: error && error.message || 'Internal server error',

JSON && JSON.stringify({ 
        error: error && error.message || 'Internal server error',
        status: 'error'
    return new Response (
            tenant_info = subdomain_result.data as TenantInfo;    return new Response (
      JSON.stringify ({
        tenant: tenant_info,
        status: 'success';
      });
      {
        headers: {
          'Content - Type': 'application / json',
          ...cors_headers}}
    );
  } catch (error) {
    console.error ('Tenant detector error:', error);
    return new Response (
      JSON.stringify ({
        error: error.message || 'Internal server error',
        status: 'error';
console.error('Tenant detector error:', error);
    return new Response(
      JSON.stringify({
        error: error.message |'Internal server error'
        status: 'error'
      });
      {
        status: 500;
        headers: {

'Content-Type': 'application/json'
          ...corsHeaders}}
    )
;
      });
      {
        status: 500;
        headers: {  }
});          'Content - Type': 'application / json',
          ...cors_headers}}
    );
  }
});
  // TODO: Implement
}
      // Try matching custom domain first;
      let { data, error } = await supabase;'
        .from ('whitelabel_tenants');''
        .select ('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset');''
        .eq ('custom_domain', hostname);''
        .eq ('is_active', true);'
        .single ();
;
      // Check condition;
        console.error ('Database error:', error);`;
        throw new Error (`Database error: ${error.message}`);
      tenant_info = data as TenantInfo;
  // TODO: Implement
      // Try matching custom domain first;
        .eq ('custom_domain', hostname);
      // If no match on custom domain, try subdomain;

      if (!data && !error) {;
        const subdomain = hostname.split('.')[0],;
        if (subdomain && !['wwwapplocallocalhost'].includes(subdomain)) {;
            .from('whitelabel_tenants');
            .select('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset');
            .eq('subdomain', subdomain);
            .eq('is_active', true);
            .single(),;
          if (!subdomainResult.error) {;
            tenantInfo = subdomainResult.data as TenantInfo;



      // Check condition;
        const subdomain = hostname.split ('.')[0];
        if () {) {
          const subdomain_result = await supabase;
            .eq ('subdomain', subdomain);
          // Check condition;
  $2;

}
          const subdomain_result = await supabase;'
            .from ('whitelabel_tenants');''
            .select ('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset');''
            .eq ('subdomain', subdomain);''
            .eq ('is_active', true);'
            .single ();
;
          // Check condition;

if ( {) {
  $2;
}
            tenant_info = subdomain_result.data as TenantInfo;
      } else // Check condition;






    return new Response(

      JSON && JSON.stringify({
        tenant: tenantInfo,

        status: 'success)
      });
      {
        headers: {
          'Content-Type': 'application/json
          ...corsHeaders}}
    )
  } catch (error) {
    console && console.error('Tenant detector error:', error);

        error: error && error.message || 'Internal server error',
        status: 'error
    return new Response (
      JSON.stringify ({
        tenant: tenant_info,
        status: 'success';')
          'Content - Type': 'application / json',
          ...cors_headers}}
    );
    console.error ('Tenant detector error:', error);
        error: error.message || 'Internal server error',
        status: 'error';')
    console.error('Tenant detector error:', error);
      JSON.stringify({
        error: error.message |'Internal server error,
  status: 'error)
      });
      {
        headers: {'
          'Content - Type': 'application / json','

          ...cors_headers}}
    );
  } catch (error) {'
    console.error ('Tenant detector error:', error);'
    return new Response (

      JSON.stringify ({'
        error: error.message || 'Internal server error',''
        status: 'error';')'
    console.error('Tenant detector error:', error);'
    return new Response(
      JSON.stringify({'
        error: error.message |'Internal server error'','
  status: 'error'')
      });
      {
        status: 500;,

    return new Response(;
      JSON.stringify({;
        tenant: tenantInfo,;
      }),;
      {;
        headers: {;
          'Content-Type': 'application/json',;
          ...corsHeaders}});
  } catch (error) {;
    console.error('Tenant detector error:', error),;
        error: error.message || 'Internal server error',;
        status: 500,;
        headers: {;
          'Content-Type': 'application/json',;
          ...corsHeaders}});







import { serve } from 'https://deno.land/std@0.208.0/http/server.ts',;
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.7',;
  }
});
'
          'Content - Type': 'application / json','

  }
});

}
});
          'Content - Type': 'application / json',
          ...cors_headers}}
    );
  }
});
;
import { serve } from 'https://deno.land/std@0.208.0/http/server.ts',;
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.7',;

;'
import { serve } from 'https://deno.land/std@0.208.0/http/server.ts',;''
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.7',;'
;
interface TenantInfo {;
  id:string,;
  brand_name:string,;
  subdomain:string,;
  custom_domain:string | null,;
  primary_color:string,;
  logo_url:string | null,;
  theme_preset:string;
const corsHeaders = {;
  'Access-Control-Allow-Origin':'*Access-Control-Allow-Methods':'GET, POST, OPTIONSAccess-Control-Allow-Headers':'Content-Type, Authorization, x-client-infoAccess-Control-Max-Age':'86400'},;
// Initialize Supabase client;
const supabaseUrl = Deno.env.get('SUPABASE_URL'),;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY'),;
if (!supabaseUrl || !supabaseServiceKey) {;
  throw new Error('Required environment variables are not set'),;
const supabase = createClient(supabaseUrl, supabaseServiceKey),;
serve(async (req) => {;
  // Handle CORS preflight requests;
  if (req.method === 'OPTIONS') {;
    return new Response(null, {;
      status:204,;)
      headers:corsHeaders}),;
  try {;
    const url = new URL(req.url),;
    const hostnameParam = url.searchParams.get('host'),;
    const subdomainParam = url.searchParams.get('subdomain'),;
    // Get hostname from parameters or headers;
    const forwardedHost = req.headers.get('x-forwarded-host'),;
    const hostname = hostnameParam || ;
      (forwardedHost ? forwardedHost.split()[0].trim().split(':')[0] :null) ||;
      url.hostname,;
    if (!hostname && !subdomainParam) {;
      throw new Error('No hostname or subdomain provided'),;
    // Extract tenant info;
    let tenantInfo:TenantInfo | null = null,;
    if (subdomainParam) {;
      // Direct subdomain lookup;
        .eq('subdomain', subdomainParam);
      if (error) {;
        console.error('Database error:', error),;`;
        throw new Error(`Database error:${error.message}`),;
      tenantInfo = data as TenantInfo,;
    } else {;
      // Try matching custom domain first;
        .eq('custom_domain', hostname);
      // If no match on custom domain, try subdomain;
        if (subdomain && !['wwwapp', 'locallocalhost'].includes(subdomain)) {;
            tenantInfo = subdomainResult.data as TenantInfo,;
      } else if (data) {;
        tenant:tenantInfo,;
        status:'success';')
        headers:{;
          'Content-Type':'application/json',;
          ...corsHeaders}}),;
      JSON.stringify({ ;
        error:error.message || 'Internal server error',;
        status:'error';')
        status:500,;
  }}),
  // Handle CORS preflight requests if (req.method === 'OPTIONS') {
  // Extract tenant info let tenantInfo: TenantInfo | null = null;
  // Direct subdomain lookup const {
  // TODO: Implement
  data, error;
}= await supabase .from ('whitelabel tenants') .select ('id, brand name, subdomain, custom domain, primary color, logo url, theme preset') .eq ('subdomain', subdomainParam) .eq ('is active', true) .single ();
.from ('whitelabel tenants') .select ('id, brand name, subdomain, custom domain, primary color, logo url, theme preset') .eq ('custom domain', hostname) .eq ('is active', true) .single ();
// If no match on custom domain, try subdomain 
}
});
  }
});
// If no match on custom domain, try subdomain;

`;
pr-12325
'

