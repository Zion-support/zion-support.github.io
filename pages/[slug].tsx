import React from 'react'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground'
import Button from '../components/ui/Button'
interface Service {
  id: string
  name: string
  description: string
  slug: string
}

interface ServicePageProps {
  service: Service
}

const ServicePage: React.FC<ServicePageProps> = ({ service }) => {
  return (
    <UltraFuturisticBackground variant="quantum" intensity="high">
      <Head>
        <title>{service.name} - Zion Tech Group</title>
        <meta name="description" content={service.description} />
      </Head>
      
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">{service.name}</h1>
          <p className="text-xl mb-8">{service.description}</p>
          <Button href="/contact" className="w-full">
            Talk to Sales
          </Button>
        </div>
      </div>
    </UltraFuturisticBackground>
  )
}
export const getStaticPaths: GetStaticPaths = async () => {
  // Return empty paths for now - this can be populated with actual services
  return {
    paths: [],
    fallback: false
  }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string
  // Mock service data - replace with actual data fetching
  const service: Service = {
    id: slug,
    name: 'Service Name',
    description: 'Service description',
    slug: slug
  }
  return {
    props: {
      service
    }
  }
}
export default ServicePage