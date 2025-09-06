import React from 'react',
import Head from 'next/head',
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground',
import Button from '../../components/ui/Button',
import Card from '../../components/ui/Card';
import { Check, Mail, MapPin, Phone, ExternalLink  } from 'lucide-react';
import { enhancedRealMicroSaasServices  } from '../../data/enhanced-real-micro-saas-services';
import { extraServices  } from '../../data/extra-services';
import { additionalEnhancedServices  } from '../../data/additional-real-services';
import { newRealServices  } from '../../data/new-real-services';
import { marketReadyServices } from '../../data/market-ready-services';
type Service = any;
	if (!service) {
		service = services.find((s) => toSlug(s.id || '') === incomingSlug || toSlug(s.name || '') === incomingSlug)
	}

origin/cursor/automate-test-improve-and-merge-code-2533
type Service = (typeof enhancedRealMicroSaasServices)[number];
const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com'


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
    }
    return null;
  } catch {;
    return null;
  }


export async function getStaticPaths() {;
  const services = getAllServices();
  const slugs = new Set<string>();


    // Fall back to normalized id or name to provide a stable URL under /services/*;
    if (s && s.id) slugs && slugs.add(toSlug(s && s.id));
    else if (s && s.name) slugs && slugs.add(toSlug(s && s.name));
  }
    paths: Array.from(slugs).map(slug => ({ params: { slug } })),
    fallback: false,
  };

export async function getStaticProps({ params }: { params: { slug: string } }) {;

  return {;
    paths: Array && Array.from(slugs).map(slug => ({ params: { slug } })),;
    fallback: false,;
  };

export async function getStaticProps(): any ({ params }: { params: { slug: string } }) {;
  const services = getAllServices();
  const incomingSlug = (params?.slug || '').replace(/^\/+|\/+$/g, '');

  let service: Service | undefined = services && services.find(s => {;
    if (!s && s.link) return false;
    const fromLink = extractServiceSlugFromLink(s && s.link);
    return fromLink === incomingSlug;
  });

  if (!service) {;
    service = services && services.find(;
      s =>;
        toSlug(s && s.id || '') === incomingSlug ||;
        toSlug(s && s.name || '') === incomingSlug;
    );
  }
origin/cursor/automate-test-improve-and-merge-code-2533
  if (!service) {
    return { notFound: true }
  }
  return {
    props: { service }
  }
export default function ServiceDetailPage({ service }: { service: Service }) {
  return (
    <UltraFuturisticBackground variant='quantum' intensity='high'>;
      <Head>;
        <title>{service && service.name} | Zion Tech Group</title>;
        <meta
          name='description'
                <Button
                  href='/contact'
                  className='flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white'>;
                  Contact Sales;
                </Button>;
                <Button
                  href={service && service.link}
                  variant='outline'
                  <a
                    href={`tel:${contactInfo && contactInfo.mobile.replace(/[^+\\d]/g, '')}`}
                    className='hover:underline'>;
                    {contactInfo && contactInfo.mobile}
                  </a>;
                </div>;
                <div className='flex items-center gap-2 text-purple-400'>;
                  <Mail className='w-4 h-4' />;
                  <a
                    href={`mailto:${contactInfo && contactInfo.email}`}
                    className='hover:underline'>;
                    {contactInfo && contactInfo.email}
                  </a>;
                </div>;
                <div className='flex items-center gap-2 text-green-400'>;
                  <MapPin className='w-4 h-4' />;
                  <a
                    href={`https://maps && maps.google.com/?q=${encodeURIComponent(contactInfo && contactInfo.address)}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-xs hover:underline'
                  >
                    {contactInfo.address}
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </UltraFuturisticBackground>
  );
origin/cursor/automate-test-improve-and-merge-code-2533
