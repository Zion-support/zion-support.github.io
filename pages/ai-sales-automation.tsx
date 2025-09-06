<<<<<<< HEAD
<<<<<<< HEAD

import React from 'react';
import Head from 'next/head';
<<<<<<< HEAD
import { Phone, Mail, MapPin, Check, ArrowRight, Star, ChartBar } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
export default function AISalesAutomationPage() {
  const service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/ai-sales-automation'))
  if (!service) return null
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
import {
  Phone,
  Mail,
  MapPin,
  Check,
  ArrowRight,
  Star,
  ChartBar,;
} from 'lucide-react';
import Layout from '../components/layout/Layout';

import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
}

export default function AISalesAutomationPage() {
  const service = enhancedRealMicroSaasServices.find(s =>
    s.link.endsWith('/ai-sales-automation')
  );
  if (!service) return null;

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

=======
import React from 'react',;
import Head from 'next/head',;
import { Phone, Mail, MapPin, Check, ArrowRight, Star, ChartBar } from 'lucide-react',;
import Layout from '../components/layout/Layout',;
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services',;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import React from 'react';
import Layout from '../components/layout/Layout';
export default function AISalesAutomation() {
  return (
    <Layout title="AI Sales Automation - Zion Tech Group">
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold text-center mb-8">
            AI Sales Automation
          </h1>
          <p className="text-center text-gray-600">
            Automate your sales processes with AI-powered solutions.
          </p>
        </div>
      </div>
    </Layout>
  );
import React from 'react'
import Head from 'next/head'
import { Phone, Mail, MapPin, Check, ArrowRight, Star, ChartBar } from 'lucide-react',
import Layout from '../components/layout/Layout'
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services'
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function AISalesAutomationPage() {
  const service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/ai-sales-automation'))
  if (!service) return null,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  return (
    <Layout>
      <Head>
        <title>{service.name} - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content={service.description} />
        <link rel="canonical" href="https://ziontechgroup.com/ai-sales-automation" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent flex items-center justify-center gap-3 w-10 h-10"><ChartBar />{service.name}</h1>
            <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">{service.tagline}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <div className="lg:col-span-2 bg-black/30 rounded-2xl border border-emerald-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-4">Sales automation</h2>
              <p className="text-slate-300 mb-6">{service.description}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.features.slice(0, 12).map((feat, i) => (
                  <li key={i} className="flex items-start space-x-3 text-slate-200 w-5 h-5 text-emerald-400 mt-0.5"><Check /><span>{feat}</span></li>
<<<<<<< HEAD
                ))}
=======
                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              </ul>
            </div>
            <div className="bg-black/30 rounded-2xl border border-emerald-500/30 p-6 h-fit">
              <div className="flex items-end justify-between mb-3">
                <div>
                  <div className="text-3xl font-bold text-white text-slate-400 text-base">{service.price}<span >{service.period}</span></div>
                  <div className="text-slate-400">{service.trialDays}-day free trial • Setup: {service.setupTime}</div>
                </div>
                <div className="flex items-center text-yellow-400 w-4 h-4 mr-1"><Star />{service.rating.toFixed(1)}</div>
              </div>
<<<<<<< HEAD
              <a href="/contact" className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200 w-5 h-5 ml-2">Accelerate Pipeline<ArrowRight /></a>
=======
              <a href="/contact" className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200 w-5 h-5 ml-2">Accelerate Pipeline<ArrowRight /></Link>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <div className="flex items-center space-x-2 w-4 h-4 text-emerald-400"><Phone /><span>{service.contactInfo.mobile}</span></div>
                <div className="flex items-center space-x-2 w-4 h-4 text-purple-400"><Mail /><span>{service.contactInfo.email}</span></div>
                <div className="flex items-center space-x-2 w-4 h-4 text-green-400 text-xs"><MapPin /><span >{service.contactInfo.address}</span></div>
=======
        <meta name='description' content={service.description} />
        <link
          rel='canonical'
          href='https://ziontechgroup.com/ai-sales-automation'
        />
      </Head>
      <div className='min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-10'>
            <h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent flex items-center justify-center gap-3 w-10 h-10'>
              <ChartBar />
              {service.name}
            </h1>
            <p className='mt-4 text-xl text-slate-300 max-w-3xl mx-auto'>
              {service.tagline}
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12'>
            <div className='lg:col-span-2 bg-black/30 rounded-2xl border border-emerald-500/30 p-6'>
              <h2 className='text-2xl font-semibold mb-4'>Sales automation</h2>
              <p className='text-slate-300 mb-6'>{service.description}</p>
              <ul className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                {service.features.slice(0, 12).map((feat, i) => (
                  <li
                    key={i}
                    className='flex items-start space-x-3 text-slate-200 w-5 h-5 text-emerald-400 mt-0.5'
                  >
                    <Check />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className='bg-black/30 rounded-2xl border border-emerald-500/30 p-6 h-fit'>
              <div className='flex items-end justify-between mb-3'>
                <div>
                  <div className='text-3xl font-bold text-white text-slate-400 text-base'>
                    {service.price}
                    <span>{service.period}</span>
                  </div>
                  <div className='text-slate-400'>
                    {service.trialDays}-day free trial • Setup:{' '}
                    {service.setupTime}
                  </div>
                </div>
                <div className='flex items-center text-yellow-400 w-4 h-4 mr-1'>
                  <Star />
                  {service.rating.toFixed(1)}
                </div>
              </div>
              <a
                href='/contact'
                className='w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200 w-5 h-5 ml-2'
              >
                Accelerate Pipeline
                <ArrowRight />
              </a>
              <div className='mt-6 space-y-3 text-sm text-slate-300'>
                <div className='flex items-center space-x-2 w-4 h-4 text-emerald-400'>
                  <Phone />
                  <span>{service.contactInfo.mobile}</span>
                </div>
                <div className='flex items-center space-x-2 w-4 h-4 text-purple-400'>
                  <Mail />
                  <span>{service.contactInfo.email}</span>
                </div>
                <div className='flex items-center space-x-2 w-4 h-4 text-green-400 text-xs'>
                  <MapPin />
                  <span>{service.contactInfo.address}</span>
                </div>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
<<<<<<< HEAD
<<<<<<< HEAD
  )
}
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
=======
<<<<<<< HEAD
  );
};
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
