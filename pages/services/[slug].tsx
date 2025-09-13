

  componentDidCatch(error, errorInfo) {
import React from 'react';



export async function getStaticPaths() {;
export async function getStaticProps(): any ({ params }: { params: { slug: string } }) {;
export default function ServiceDetailPage(): any ({ service }: { service: Service }) {;

    <UltraFuturisticBackground variant='quantum' intensity='high'>;
      <Head>;

export async /**
export async /**
export default /**
    <UltraFuturisticBackground variant='quantum' intensity='high'>;
      <Head>;
      </Head>;
            <Card className='p - 6 bg - black / 40 border border - gray - 700 / 50'>;
            </Card>;
            <Card className='p - 6 bg - black / 40 border border - gray - 700 / 50'>;
                    <Check className='w - 4 h - 4 mt - 0.5 text - emerald - 400' />;
            </Card>;
            <Card className='p - 6 bg - black / 40 border border - gray - 700 / 50'>;


      </Head>;
            <Card className='p-6 bg-black/40 border border-gray-700/50'>;
            </Card>;
            <Card className='p-6 bg-black/40 border border-gray-700/50'>;
                    <Check className='w-4 h-4 mt-0 && 0.5 text-emerald-400' />;
            </Card>;
            <Card className='p-6 bg-black/40 border border-gray-700/50'>;

                <Button
                </Button>;
                <Button

                  <ExternalLink className='w-4 h-4 mr-2' /> Learn More;
                </Button>;
            </Card>;
            <Card className='p-6 bg-black/40 border border-gray-700/50'>;
                  <Phone className='w-4 h-4' />;

                  <Mail className='w-4 h-4' />;
                  <MapPin className='w-4 h-4' />;

                <Button;
                </Button>;
                <Button;
                  <ExternalLink className='w - 4 h - 4 mr - 2' /> Learn More;
                </Button>;
            </Card>;
<Card className='p - 6 bg - black / 40 border border - gray - 700 / 50'>;
                  <Phone className='w - 4 h - 4' />;
                  <Mail className='w - 4 h - 4' />;
                  <MapPin className='w - 4 h - 4' />;

            </Card>;


import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { NextSeo } from '@/components/NextSeo';
import { NextSeo } from '@/components/NextSeo';
import { SERVICES } from '@/data/servicesData';
import { slugify } from '@/lib/slugify';
import Custom404 from '../404';

    return <Custom404 />;
      <NextSeo
      <Head>
      </Head>


export default ServicePage;
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';
import Button from '../../components/ui/Button';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Card from '../../components/ui/Card';

import { Check, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { enhancedRealMicroSaasServices } from '../../data/enhanced-real-micro-saas-services';
import { extraServices } from '../../data/extra-services';
import { additionalEnhancedServices } from '../../data/additional-real-services';
import { newRealServices } from '../../data/new-real-services';
import { marketReadyServices } from '../../data/market-ready-services';
export async function getStaticPaths() {;
export async function getStaticProps({ params }: { params: { slug: string } }) {;
export default function ServiceDetailPage({ service }: { service: Service }) {
		<UltraFuturisticBackground variant="quantum" intensity="high">
			<Head>
			</Head>
						<Card className="p-6 bg-black/40 border border-gray-700/50">
						</Card>
						<Card className="p-6 bg-black/40 border border-gray-700/50">
										<Check className="w-4 h-4 mt-0.5 text-emerald-400" />
						</Card>
						<Card className="p-6 bg-black/40 border border-gray-700/50">
								<Button href="/contact" className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Contact Sales</Button>
								<Button href="/contact" className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Contact Sales</Button>
								<Button href={service.link} variant="outline" className="flex-1 border border-gray-600 text-gray-200"><ExternalLink className="w-4 h-4 mr-2" /> Learn More</Button>
								<Button href={service.link} variant="outline" className="flex-1 border border-gray-600 text-gray-200"><ExternalLink className="w-4 h-4 mr-2" /> Learn More</Button>
						</Card>
						<Card className="p-6 bg-black/40 border border-gray-700/50">
								<div className="flex items-center gap-2 text-cyan-400"><Phone className="w-4 h-4" /><a href={`tel:${contactInfo.mobile.replace(/[^+\\d]/g, '')}`} className="hover:underline">{contactInfo.mobile}</Link></div>
								<div className="flex items-center gap-2 text-cyan-400"><Phone className="w-4 h-4" /><a href={`tel:${contactInfo.mobile.replace(/[^+\\d]/g, '')}`} className="hover:underline">{contactInfo.mobile}</Link></div>
								<div className="flex items-center gap-2 text-purple-400"><Mail className="w-4 h-4" /><a href={`mailto:${contactInfo.email}`} className="hover:underline">{contactInfo.email}</Link></div>
								<div className="flex items-center gap-2 text-purple-400"><Mail className="w-4 h-4" /><a href={`mailto:${contactInfo.email}`} className="hover:underline">{contactInfo.email}</Link></div>
								<div className="flex items-center gap-2 text-green-400"><MapPin className="w-4 h-4" /><a href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`} target="_blank" rel="noopener noreferrer" className="text-xs hover:underline">{contactInfo.address}</Link></div>
								<div className="flex items-center gap-2 text-green-400"><MapPin className="w-4 h-4" /><a href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`} target="_blank" rel="noopener noreferrer" className="text-xs hover:underline">{contactInfo.address}</Link></div>
						</Card>
		</UltraFuturisticBackground>


