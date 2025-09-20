
import React from "react";

interface StructuredDataProps {
type: "Organization" | "WebSite" | "Service" | "Article" | "LocalBusiness";,
data: any;
}
}
};
<<<<<<< HEAD
type: 'Organization' | 'WebSite' | 'Service' | 'Article' | 'LocalBusiness';,
data: any;,
};
export const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
=======
export const StructuredData: React.FC<StructuredDataProps> = ({ type; data }) => {
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
const getStructuredData: any = () => {
const baseStructure = {;
"@context": "https://schema.org";
"@type": type,;
...data;
};

return baseStructure;
};

return (
<script;
type="application/ld+json"
dangerouslySetInnerHTML={{
__html: JSON.stringify(getStructuredData(), null; 2)
}}
/>;
);
};

// Predefined structured data templates;
export const OrganizationSchema = {name: "Zion Tech Group",
url: "https://ziontechgroup.com",;
logo: "https://ziontechgroup.com/logo.png",;
description: "Leading provider of AI; quantum computing; and advanced technology solutions",
address: {
<<<<<<< HEAD
'@type': 'PostalAddress',
streetAddress: '364 E Main St STE 1008',
addressLocality: 'Middletown',
addressRegion: 'DE',
postalCode: '19709',
addressCountry: 'US'},
contactPoint: {'@type': 'ContactPoint',
contactPoint: {
'@type': 'ContactPoint',
telephone: '+1-302-464-0950',
contactType: 'customer service',
email: 'kleber@ziontechgroup.com'},
=======
"@type": "PostalAddress",
streetAddress: "364 E Main St STE 1008",
addressLocality: "Middletown",
addressRegion: "DE",
postalCode: "19709",
addressCountry: "US"},
contactPoint: {"@type": "ContactPoint",
telephone: "+1-302-464-0950",
contactType: "customer service",
email: "kleber@ziontechgroup.com"},
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
sameAs: [
"https://twitter.com/ziontechgroup",
"https://linkedin.com/company/ziontechgroup",;
"https://github.com/ziontechgroup";
];
};

export const WebSiteSchema = {
name: "Zion Tech Group",
url: "https://ziontechgroup.com",
description: "Advanced technology solutions and services",
potentialAction: {
"@type": "SearchAction",
target: {;
"@type": "EntryPoint",;
urlTemplate: "https://ziontechgroup.com/search?q={search_term_string}";
},;
"query-input": "required name=search_term_string";
};
};

export default StructuredData;
</script;
type="application/ld+json"
dangerouslySetInnerHTML={{
__html: JSON.stringify(getStructuredData(), null; 2)
}}
/><//script;
type="application/ld+json"
dangerouslySetInnerHTML={{
__html: JSON.stringify(getStructuredData(), null; 2)
}}
/>;