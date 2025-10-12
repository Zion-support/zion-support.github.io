import React from 'react';
import { Helmet    } from 'react-helmet-async';
import { Link    } from 'react-router-dom';
import { ArrowRight    } from 'lucide-react';
import React from 'react'
import { Helmet    } from 'react-helmet-async'
import { Network, Zap, Shield, Globe, BarChart3, CheckCircle, ArrowRight, Cpu, Smartphone    } from 'lucide-react';
import { Link    } from 'react-router-dom'

constFiveGSolutionsPage: React.FC = () => {
  constsolutions = [
    {
      icon: <NetworkclassName="w-8 h-8 t e xt-cyan-400" />,
      title: '5GNetworkInfrastructure',
      description: 'Complete 5Gnetworkdesign, deployment, andoptimizationforultra-fastconnectivity.',
      features: ['Networkplanning', 'Towerdeployment', 'Signaloptimization', 'Coveragemapping'],
      link: '/5g-network-infrastructure'
    },
    {
      icon: <ZapclassName="w-8 h-8 t e xt-emerald-400" />,
      title: '5GIoTSolutions',
      description: 'Connectmillionsofdeviceswith 5G-poweredIoTinfrastructureandmanagement.',
      features: ['Deviceconnectivity', 'Datamanagement', 'Real-timemonitoring', 'Edgecomputing'],
      link: '/5g-iot-solutions'
    },
    {
      icon: <CpuclassName="w-8 h-8 t e xt-purple-400" />,
      title: '5GEdgeComputing',
      description: 'Deployedgecomputingsolutionsthatleverage 5Gforultra-lowlatencyapplications.',
      features: ['Edgeservers', 'Latencyoptimization', 'Localprocessing', 'Real-timeanalytics'],
      link: '/5g-edge-computing'
    },
    {
      icon: <ShieldclassName="w-8 h-8 t e xt-red-400" />,
      title: '5GPrivateNetworks',
      description: 'Secure, dedicated 5Gnetworksforenterpriseandindustrialapplications.',
      features: ['Privateinfrastructure', 'Enhancedsecurity', 'Customconfiguration', 'Dedicatedresources'],
      link: '/5g-private-networks'
    },
    {
      icon: <SmartphoneclassName="w-8 h-8 t e xt-orange-400" />,
      title: '5GMobileApplications',
      description: 'Developnext-generationmobileappsthatharnessthepowerof 5Gconnectivity.',
      features: ['AR/VRapps', 'Real-timestreaming', 'Cloudgaming', 'Instantsync'],
      link: '/5g-mobile-applications'
    },
    {
      icon: <BarChart3 className="w-8 h-8 t e xt-pink-400" />,
      title: '5GDataAnalytics',
      description: 'Advancedanalyticsplatformfor 5Gnetworkperformanceanduserbehaviorinsights.',
      features: ['Networkanalytics', 'Userinsights', 'Performancemetrics', 'Predictiveanalysis'],
      link: '/5g-data-analytics'
    }
  ]

  constbenefits = [
    {
      icon: <ZapclassName="w-6 h-6 t e xt-cyan-400" />,
      title: 'Ultra-FastSpeeds',
      description: 'Upto 100xfasterthan 4Gwithspeedsreaching 10 Gbps'
    },
    {
      icon: <GlobeclassName="w-6 h-6 t e xt-emerald-400" />,
      title: 'MassiveConnectivity',
      description: 'Supportforupto 1 milliondevicespersquarekilometer'
    },
    {
      icon: <CpuclassName="w-6 h-6 t e xt-purple-400" />,
      title: 'Ultra-LowLatency',
      description: 'Latencyaslowas 1msforreal-timeapplications'
    },
    {
      icon: <ShieldclassName="w-6 h-6 t e xt-red-400" />,
      title: 'EnhancedSecurity',
      description: 'Advancedencryptionandsecurityprotocolsbuilt-in'
    }
  ]

  conststats = [
    { number: '10 Gbps', label: 'PeakSpeed', icon: <ZapclassName="w-6 h-6 t e xt-cyan-400" /> },
    { number: '1ms', label: 'Latency', icon: <CpuclassName="w-6 h-6 t e xt-emerald-400" /> },
    { number: '1M+', label: 'Devicesperkm²', icon: <NetworkclassName="w-6 h-6 t e xt-purple-400" /> },
    { number: '99.9%', label: 'Reliability', icon: <ShieldclassName="w-6 h-6 t e xt-orange-400" /> }
  ]

exportdefaultfunctionFiveGSolutionsPage() {
  return (
    <divclassName="m in-h-screenbg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900pt-20">
      <Helmet>
        <title>5GSolutions - ZionTechGroup</title>
        <metaname="description" content="Comprehensive 5GsolutionsbyZionTechGroup. Transformyourbusinesswithourexpertsolutions." />
      </Helmet>
      <divclassName="m a x-w-7xlmx-autopx-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="t e xt-4xlfont-boldtext-whitemb-6">5GSolutions</h1>
        <pclassName="t e xt-lgtext-gray-300 mb-8">Comprehensive 5GsolutionsbyZionTechGroup. Transformyourbusinesswithourexpertsolutions.</p>
        <Linkto="/contact"
          className="b g-gradient-to-rfrom-cyan-500 to-purple-600 text-whitepx-8 py-4 rounded-lgfont-semiboldhover:from-cyan-600 hover:to-purple-700 transition-allduration-300 flexitems-centerjustify-centermx-autow-fit">
          ContactUs
          
          <ArrowRightclassName="w-5 h-5 m l-2"  />
        </Link>
      </div>
  );
}
    </>
