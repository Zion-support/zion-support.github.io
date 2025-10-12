import React from 'react'
import { Link } from 'react-router-dom'
export default function Component() {
return (
<div>
<h1>Component</h1>
</div>
);
}
const iotServices = [
{
icon: <Network className="w-5h-5ml-2" />,
title: 'IoT Device Management',
description: 'Comprehensive platform for managing, monitoring, and maintaining IoT devices across your entire network.',
features: ['Device provisioning', 'Remote monitoring', 'Firmware updates', 'Health diagnostics'],
price: 'Starting at $299/month';
},
{
icon: <Database className="w-5h-5ml-2" />,
title: 'IoT Data Analytics',
description: 'Advanced analytics platform to process, analyze, and derive insights from IoT sensor data.',
features: ['Real-time processing', 'Predictive analytics', 'Data visualization', 'Custom dashboards'],
price: 'Starting at $399/month';
},
{
icon: <Shield className="w-5h-5ml-2" />,
title: 'IoT Security Suite',
description: 'End-to-end security solutions to protect your IoT infrastructure from cyber threats.',
features: ['Device authentication', 'Data encryption', 'Threat detection', 'Compliance monitoring'],
price: 'Starting at $499/month';
},
{
icon: <Cloud className="w-5h-5ml-2" />,
title: 'IoT Cloud Platform',
description: 'Scalable cloud infrastructure designed specifically for IoT applications and workloads.',
features: ['Auto-scaling', 'Global edge locations', '99.9% uptime', 'Multi-cloud support'],
price: 'Starting at $199/month';
},
{
icon: <Cpu className="w-5h-5ml-2" />,
title: 'Edge Computing Solutions',
description: 'Process data at the edge for faster response times and reduced latency in IoT applications.',
features: ['Local processing', 'Real-time decisions', 'Bandwidth optimization', 'Offline capability'],
price: 'Starting at $349/month';
},
{
icon: <BarChart3 className="w-5h-5ml-2" />,
title: 'IoT Integration Services',
description: 'Seamlessly integrate IoT devices with existing systems and third-party applications.',
features: ['API development', 'System integration', 'Data synchronization', 'Legacy compatibility'],
price: 'Starting at $249/month';
}
];

const industries = [
{
name: 'Manufacturing',
description: 'Smart factories with predictive maintenance and quality control',
icon: <Wrench className="w-5h-5ml-2" /&gt;</Wrench&gt;
},
{
name: 'Healthcare',
description: 'Medical device monitoring and patient care optimization',
icon: <Heart className="w-5h-5ml-2" /&gt;</Heart&gt;
},
{
name: 'Agriculture',
description: 'Precision farming with soil and crop monitoring',
icon: <Globe className="w-5h-5ml-2" /&gt;</Globe&gt;
},
{
name: 'Smart Cities',
description: 'Traffic management, waste optimization, and public safety',
icon: <Building className="w-5h-5ml-2" /&gt;</Building&gt;
},
{
name: 'Retail',
description: 'Inventory management and customer experience enhancement',
icon: <ShoppingCart className="w-5h-5ml-2" /&gt;</ShoppingCart&gt;
},
{
name: 'Energy',
description: 'Smart grid management and renewable energy optimization',
icon: <Zap className="w-5h-5ml-2" /&gt;</Zap&gt;
}
];

const benefits = [
{
icon: <TrendingUp className="w-5h-5ml-2" />,
title: 'Increased Efficiency',
description: 'Automate processes and optimize operations with real-time data insights';
},
{
icon: <DollarSign className="w-5h-5ml-2" />,
title: 'Cost Reduction',
description: 'Reduce operational costs through predictive maintenance and resource optimization';
},
{
icon: <Shield className="w-5h-5ml-2" />,
title: 'Enhanced Security',
description: 'Protect your IoT infrastructure with enterprise-grade security solutions';
},
{
icon: <Rocket className="w-5h-5ml-2" />,
title: 'Scalability',
description: 'Scale your IoT solutions as your business grows with our flexible platform';
}
];

return (;
