import Link from 'next/link'
import { ArrowRight, Brain, Cloud, Shield, Zap, Users, Globe, Target, Sparkles, TrendingUp } from 'lucide-react'

export const metadata = {
  title: 'Zion Tech Group - AI & Technology Solutions',
  description: 'Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services.',
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-white sm:text-7xl">
            Transform Your Business with{' '}
            <span className="relative whitespace-nowrap text-blue-400">
              <span className="relative">AI & Technology</span>
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-blue-100">
            Expert consulting and implementation services for cutting-edge AI, cloud infrastructure, and micro SaaS solutions.
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <Link
              className="group inline-flex items-center justify-center rounded-full py-4 px-8 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white"
              href="/contact"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              className="group inline-flex ring-1 items-center justify-center rounded-full py-4 px-8 text-sm focus:outline-none ring-white/10 text-white hover:ring-white/20"
              href="/services"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl md:text-center">
            <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
              Comprehensive Technology Solutions
            </h2>
            <p className="mt-4 text-lg tracking-tight text-blue-100">
              From AI automation to cloud infrastructure, we provide end-to-end solutions for modern businesses.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <Brain className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
                  AI & Machine Learning
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-blue-100">
                  <p className="flex-auto">Advanced AI solutions including automation, predictive analytics, and intelligent decision-making systems.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <Cloud className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
                  Cloud Infrastructure
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-blue-100">
                  <p className="flex-auto">Scalable cloud solutions with AWS, Azure, and Google Cloud for maximum performance and reliability.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <Shield className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
                  Security & Compliance
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-blue-100">
                  <p className="flex-auto">Enterprise-grade security measures and compliance frameworks to protect your business data.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <Zap className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
                  Micro SaaS Solutions
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-blue-100">
                  <p className="flex-auto">Custom micro SaaS applications designed to solve specific business challenges efficiently.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <Users className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
                  Expert Consulting
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-blue-100">
                  <p className="flex-auto">Strategic guidance from industry experts to help you navigate complex technology decisions.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <Globe className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
                  Global Reach
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-blue-100">
                  <p className="flex-auto">Worldwide deployment capabilities with local support and compliance expertise.</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white/5 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-16 sm:px-16 sm:py-24">
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to Transform Your Business?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
                Let our experts help you implement cutting-edge technology solutions that drive real results.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/contact"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Get Started Today
                </Link>
                <Link href="/services" className="text-sm font-semibold leading-6 text-white">
                  Learn More <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}