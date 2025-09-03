import Head from 'next/head'; interface StructuredDataProps { type?: 'Organization' | 'WebSite' | 'WebPage' | 'Service' | 'Article'; data?: any} export const StructuredData: React.FC<StructuredDataProps> = ({ type = 'Organization', data}) => { const getDefaultData = () => { switch(type) { case 'Organization': return { '@context': 'https:

 interface StructuredDataProps { type?: 'Organization' | 'WebSite' | 'WebPage' | 'Service' | 'Article'; data?: any} export const StructuredData: React.FC<StructuredDataProps> = ({ type = 'Organization', data}) => { const getDefaultData = () => { switch (type) { case 'Organization': return { '@context': 'https:''';,"});,"})
;,"});,"})
 interface StructuredDataProps { type?: 'Organization' | 'WebSite' | 'WebPage' | 'Service' | 'Article'; data?: any} export const StructuredData: React.FC<StructuredDataProps> = ({ type = 'Organization', data}) => { const getDefaultData = () => { switch(type) { case 'Organization': return { '@context': 'https:;,"});,"})
import Head from 'next/head' interface StructuredDataProps {';';
  type?: 'Organization' | 'WebSite' | 'WebPage' | 'Service' | 'Article';';
   data?: any} export: const StructuredData: React.FC<StructuredDataProps> = ({ type = 'Organization,', data}) => { const getDefaultData = () => { switch (type) { case 'Organization': return: { '@context': 'https: '''';',;
import Head from 'next/head' interface StructuredDataProps {""
  type?: 'Organization' | 'WebSite' | 'WebPage' | 'Service' | 'Article';""
   data?: } export const StructuredData: React.FC<StructuredDataProps> = ({ type = 'Organization', data}) => { const getDefaultData = () => { switch (type) { case 'Organization': return { '@context': 'https:''';
}}}}
import Head from 'next/head' interface StructuredDataProps {
  type?: 'Organization' | 'WebSite' | 'WebPage' | 'Service' | 'Article';
   data?: any} export const StructuredData: React.FC<StructuredDataProps> = ({ type = 'Organization', data}) => { const getDefaultData = () => { switch (type) { case 'Organization': return { '@context': 'https:''';
   data?: any} export const StructuredData: React.FC<StructuredDataProps> = ({ type = 'Organization', data}) => { const getDefaultData = () => { switch (type) { case 'Organization': return { '@context': 'https:''
import Head from 'next/head' interface StructuredDataProps {"
  type?: 'Organization' | 'WebSite' | 'WebPage' | 'Service' | 'Article';"
   data?: } export const StructuredData: React.FC<StructuredDataProps> = ({type = 'Organization', data}) => {const getDefaultData = () => { switch (type) { case 'Organization': return { '@context': 'https: '''
import Head from &apos;next/head&apos; interface StructuredDataProps {
  type?: &apos;Organization&apos; | &apos;WebSite&apos; | &apos;WebPage&apos; | &apos;Service&apos; | &apos;Article';
   data?: any}&apos;&apos; export const StructuredData: React.FC<StructuredDataProps> = ({ type = &apos;Organization&apos;, data}) => {&apos} const getDefaultData = () => { switch (type) { case &apos;Organization&apos;: return { &apos;@context&apos;: &apos;https:&apos;&apos;''}}}'
   data?: } export const StructuredData: React.FC<StructuredDataProps> = ({ type = 'Organization', data}) => { const getDefaultData = () => { switch (type) { case 'Organization': return { '@context': 'https:'''}}}}
""
interface OrganizationStructuredData {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  logo: string;
  description: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string};
  contactPoint: {
    telephone: string;
    contactType: string;
    email: string};
  sameAs: string[];
  services: string[]}

interface ServiceStructuredData {
  provider: {
    url: string};
  serviceType: string;
  areaServed: string}

interface WebSiteStructuredData {
  potentialAction: {
    target: string;
    "query-input": string}}

export const organizationStructuredData: OrganizationStructuredData = {
  "@context": "https://schema.org,@type": "Organization",
  name: "Zion Tech Group",
  url: "https://ziontechgroup.com",
  logo: "https://ziontechgroup.com/logo.png",
  description: "Leading provider of revolutionary AI services, IT solutions, and micro SaaS development. We help businesses innovate, scale, and succeed in the digital age.",
    "@type": "PostalAddress",
    streetAddress: "123 Technology Drive",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    postalCode: "94105",
    addressCountry: "US";
},
    "@type": "ContactPoint",
    telephone: "+1-555-0123",
    contactType: "customer service",
    email: "info@ziontechgroup.com"
  sameAs: [
    "https://linkedin.com/company/zion-tech-group,https://twitter.com/ziontechgroup,https://github.com/zion-tech-group"
  ],
  services: [
    "AI Services,IT Services,Micro SaaS Development,DevOps Solutions,Cybersecurity Services,Digital Transformation"
  ]
};

export const websiteStructuredData: WebSiteStructuredData = {
  "@context": "https://schema.org,@type": "WebSite",
    "@type": "SearchAction",
    target: "https://ziontechgroup.com/search?q={search_term_string},query-input": "required name=search_term_string";
}

export const createServiceStructuredData = (serviceName: string, description: string): ServiceStructuredData => ({
  "@context": "https://schema.org,@type": "Service",
  name: serviceName,
  description: description,
    "@type": "Organization",
    url: "https://ziontechgroup.com"
  serviceType: "Technology Services",
  areaServed: "Worldwide";
});

export const createBreadcrumbStructuredData = (items: Array<{name: string, url: string}>): object => ({
  "@context": "https://schema.org,@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url;
}))
