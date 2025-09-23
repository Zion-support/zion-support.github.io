import Head from 'next/head' interface StructuredDataProps {

  type?: 'Organization' | 'WebSite' | 'WebPage' | 'Service' | 'Articledata?: any
} export const StructuredData: Reac t.FC<StructuredDataProps> = ({ type = Organization', data}) => { const getDefaultData = (props: any) => { switch (type) { case 'Organization': return { '@context': 'https:'''
</StructuredDataProps>