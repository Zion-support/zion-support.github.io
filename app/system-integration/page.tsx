import React from 'react';
export default Page;
'use client';
const Page: React.FC = () => {
const features = [
{
icon: <Cloud className="w-5h-5ml-2" />,
title: "Cloud Integration",
description: "Seamlessly integrate with all major cloud platforms and services.";
},
{
icon: <Zap className="w-5h-5ml-2" />,
title: "Real-time Sync",
description: "Keep all your systems synchronized with real-time data updates.";
},
{
icon: <Shield className="w-5h-5ml-2" />,
title: "Secure & Reliable",
description: "Enterprise-grade security ensures your data is protected during integration.";
}
];

return (
<></>
<Helmet></Helmet>
<title />System Integration - Zion Tech Group</title>
<meta name="description" content="Professional system integration services by Zion Tech Group. Expert solutions tailored to your business needs." /></meta>
<meta name="keywords" content="system integration, IT services, Zion Tech Group" /></meta>
<meta property="og:title" content="System Integration - Zion Tech Group" /></meta>
<meta property="og:description" content="Professional system integration services by Zion Tech Group. Expert solutions tailored to your business needs." /></meta>
<meta property="og:type" content="website" /></meta>
<meta property="og:url" content="https://ziontechgroup.com/system-integration" /></meta>
</Helmet>;
