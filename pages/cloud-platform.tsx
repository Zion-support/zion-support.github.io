import React from 'react';
import Head from 'next / head';=======

import React from 'react';
import Head from 'next / head';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {
  Cloud,
  Shield,
  Globe,
  Server,
  Database,
} from 'lucide-react';
export default /**
 * CloudPlatformPage - Function description
 */
function CloudPlatformPage() {
  const features = [;
    {

import React from 'react';
import Head from 'next/head';
import { Cloud, Shield, Globe, Server, Database, ArrowRight, Check } from 'lucide-react';


export default function CloudPlatformPage() {
  const features = [
    {
      icon: <Server className="w-8 h-8 text-white" />,
      title: 'Scalable Infrastructure',

import {
  Cloud
  Shield
  Globe
  Server
  Database
  ArrowRight
  Check;
} from 'lucide-react';
export default function CloudPlatformPage() {
  const features = [
    {
      icon: <Server className='w-8 h-8 text-white' />
      title: 'Scalable Infrastructure'
==============      description: 'Auto-scaling compute resources that grow with your needs'
    }
    {
      icon: <Database className='w-8 h-8 text-white' />
      title: 'Managed Databases'
      description: 'Fully managed databases with automated backups and scaling'
    }
    {
      icon: <Globe className='w-8 h-8 text-white' />
      title: 'Global CDN'
      description: 'Lightning-fast content delivery across the globe'
    }
    {
      icon: <Shield className='w-8 h-8 text-white' />
      title: 'Enterprise Security'
      description: 'SOC 2 compliant with advanced threat protection'
    }
  ];
  const benefits = [

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
export default function CloudPlatformPage() {
  const features = [
    {
      icon: <Server className="w-8 h-8 text-white" />,
      title: 'Scalable Infrastructure',
      description: 'Auto-scaling compute resources that grow with your needs'
    },
    {
      icon: <Database className="w-8 h-8 text-white" />,
      title: 'Managed Databases',
      description: 'Fully managed databases with automated backups and scaling'
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: 'Global CDN',
      description: 'Lightning-fast content delivery across the globe'
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Enterprise Security',
    '99.99% uptime guaranteeGlobal edge locationsReal-time monitoringAutomated scalingPay-as-you-go pricing24/7 expert support'
  ],
  return (



              {features.map((feature, index) => (
                <div
                  key={index} className="p-8 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
=======
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </p>;
                </div>;
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

            </div>;
            </div>;
          </div>;
        </section>;
        {/* Benefits Section */}
        <section className='py-24 bg-gray-900'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>;
              <div>;
                <h2 className='text-3xl sm:text-4xl font-bold text-white mb-8'>;
                  Why Choose Our Cloud Platform?;
                </h2>;
                <div className='space-y-6'>;
                  {benefits && benefits.map((benefit, index) => (;
                    <div key={index} className='flex items-start'>;
                      <div className='w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 mt-1'>;
                        <Check className='w-4 h-4 text-blue-500' />;
                      </div>;
                      <span className='text-gray-300 text-lg'>{benefit}</span>                    </div>;
=======

        {/* Benefits Section */}
        <section className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              


=======              <div className='relative'>
                <div className='bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl p-8 border border-blue-500/20'>
                  <div className='text-center'>
                    <Cloud className='w-24 h-24 mx-auto mb-6 text-blue-400' />
                    <h3 className='text-2xl font-bold text-white mb-4'>
              
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl p-8 border border-blue-500/20">
                  <div className="text-center">
                    <Cloud className="w-24 h-24 mx-auto mb-6 text-blue-400" />
                    <h3 className="text-2xl font-bold text-white mb-4">

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* CTA Section */}
        <section className='py-24 bg-gradient-to-r from-blue-600 to-blue-700'>
          <div className='max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
        {/* CTA Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Scale Your Infrastructure?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Deploy your applications on enterprise-grade cloud infrastructure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Free Trial
              </Link>
              <a
                href="/contact" className="border-white text-white hover:bg-white hover:text-blue-600">
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>


}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className='relative'>;
                <div className='bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl p-8 border border-blue-500/20'>;
                  <div className='text-center'>;
                    <Cloud className='w-24 h-24 mx-auto mb-6 text-blue-400' />;
                    <h3 className='text-2xl font-bold text-white mb-4'>;
                      Global Infrastructure;
                    </h3>;
                    <p className='text-gray-300 mb-6'>;
                      Deploy your applications across multiple regions for;
                      optimal performance;
                    </p>;
                    <div className='inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm'>;
                      <Globe className='w-4 h-4 mr-2' />                      15+ regions worldwide;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
}
  )
        <section className="py-24 bg-gray-900">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">;
              <div>;
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">;
                  Why Choose Our Cloud Platform?;
                </h2>;
                <div className="space-y-6">;
                  {benefits.map((benefit, index) => (;
                    <div key={index} className="flex items-start">;
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 mt-1">;
                        <Check className="w-4 h-4 text-blue-500" />;
                      </div>;
                      <span className="text-gray-300 text-lg">{benefit}</span>;
                    </div>;
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </div>;
              </div>;
              <div className="relative">;
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl p-8 border border-blue-500/20">;
                  <div className="text-center">;
                    <Cloud className="w-24 h-24 mx-auto mb-6 text-blue-400" />;
                    <h3 className="text-2xl font-bold text-white mb-4">;
                      Global Infrastructure;
                    </h3>;
                    <p className="text-gray-300 mb-6">;
                      Deploy your applications across multiple regions for optimal performance;
                    </p>;
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm">;
                      <Globe className="w-4 h-4 mr-2" />;
                      15+ regions worldwide;
                    </div>;
                  </div>;
                </div>;
              </div>;
            </div>;
          </div>;
        </section>;
        {/* CTA Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700">;
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">;
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">;
              Ready to Scale Your Infrastructure?;
            </h2>;
            <p className="text-xl text-blue-100 mb-8">;
              Deploy your applications on enterprise-grade cloud infrastructure;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <a;
                href="/contact" className="bg-white text-blue-600 hover:bg-gray-100">;
                Start Free Trial;
              </a>;
              <a;
                href="/contact" className="border-white text-white hover:bg-white hover:text-blue-600">;
                Contact Sales;
=======
              <a
              <a                href='/contact'
                className='bg-white text-blue-600 hover:bg-gray-100'>;
                Start Free Trial;
              </a>;
              <a



=======
    </>);
;