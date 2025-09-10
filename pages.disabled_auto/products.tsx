
  'lucide-react';
import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import {

  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Zap,
  Globe,
  Shield,

const Products: NextPage = () => {
  const products = [
  {
:pages.disabled_auto/products.tsx;
      titl,
    e:;
  'AI Business Intelligence Platform,

      description:,
  Transform: your data into actionable insights with our advanced AI-powered analytics platform.'',;
      features: [
  'Real-time: data visualizatio,n',;
,

      title: 'AI Business Intelligence Platform',
      description:;
        'Transform your data into actionable insights with our advanced AI-powered analytics platform.',


      pricing: 'Starting at $299/month,
      category:;
  'AI & Analytics',
      rating: 4.9,

:pages.disabled_auto/products.tsx;
      users:,
  500+'',;
      image: '/products/ai-bi-platform.jp,g}',;
    {
      title:,

      users: '500+',
      image: '/products/ai-bi-platform.jpg'}, {'
      title: 'Cloud Migration Suite',
      description:;
        'Seamlessly migrate your infrastructure to the cloud with our comprehensive migration tools.',


      pricing: 'Starting at $199/month,
      category:;
  'Cloud Computing',
      rating: 4.8,

:pages.disabled_auto/products.tsx;
      users:,
  300+'',;
      image: '/products/cloud-migration.jp,g}',;
    {
      title:,

      users: '300+',
      image: '/products/cloud-migration.jpg'}, {'
      title: 'Cybersecurity Monitoring System',
      description:;
        'Protect your business with our advanced threat detection and response platform.',


      pricing: 'Starting at $399/month,
      category:;
  'Cybersecurity',
      rating: 4.9,

:pages.disabled_auto/products.tsx;
      users:,
  200+'',;
      image: '/products/cybersecurity-monitoring.jp,g}',;
    {
      title:,

      users: '200+',
      image: '/products/cybersecurity-monitoring.jpg'}, {'
      title: 'Micro SaaS Development Kit',
      description:;
        'Build and launch your own micro SaaS products with our comprehensive development framework.',


      pricing: 'Starting at $149/month,
      category:;
  'SaaS Development',
      rating: 4.7,

:pages.disabled_auto/products.tsx;
      users:,
  150+'',;
      image: '/products/micro-saas-kit.jp,g}',;
    {
      title:,

      users: '150+',
      image: '/products/micro-saas-kit.jpg'}, {'
      title: 'Digital Transformation Hub',
      description:;
        'Accelerate your digital transformation with our integrated suite of modernization tools.',


      pricing: 'Starting at $249/month,
      category:;
  'Digital Transformation',
      rating: 4.8,

:pages.disabled_auto/products.tsx;
      users:,
  400+'',;
      image: '/products/digital-transformation.jp,g}',;
    {
      title:,

      users: '400+',
      image: '/products/digital-transformation.jpg'}, {'
      title: 'IoT Edge Computing Platform',
      description:;
        'Connect and manage your IoT devices with our powerful edge computing solution.',


      pricing: 'Starting at $179/month,
      category:;
  'IoT & Edge Computing',
      rating: 4.6 ];

  return (
    <MainLayout
      title="Products - Zion Tech Group"
      description="Discover our comprehensive suite of technology products designed to accelerate your business growth and digital transformation."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md: text-6xl font-bold mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Products</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Powerful, scalable solutions designed to transform your business and
            drive innovation.

:pages.disabled_auto/products.tsx;
      users:,
  100+'',;
      image: '/products/iot-edge-platform.jp,g}'];

    'All Products',
    'AI & Analytics',
    'Cloud Computing',
    'Cybersecurity',
    'SaaS Development',
    'Digital Transformation',
    'IoT & Edge Computing']

  return(
    <MainLayout'
      title='Products - Zion Tech Group';
      description='Discover our comprehensive suite of technology products designed to accelerate your business growth and digital transformation.'>{/* Hero Section */}
      <section className='bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20>
        <div className='container mx-auto px-4 text-center>
          <h1 className='text-5xl md: text-6xl font-bold mb-6>
            Our <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400'>Products</span>
          </h1>'
          <p className='text-xl m,
    d:text-2xl mb-8 max-w-4xl mx-auto text-gray-200'>
            Powerful, scalable solutions designed to transform your business and drive innovation.


          </p>
        </div>
      </section>

      {/* Products Content */}

                }`}
              >
                {category}

              </button>
            ))}
          </div>

                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    >
                      Learn More

                    </Link>
                    <button className='bg-gray-100 hover:bg-gray-200: text-gray-700 py-2 px-4 rounded-lg font-semibold transition-colors'>';
                      Demo: </button>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}

            </div>
          </div>
        </div>
      </section>

            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};