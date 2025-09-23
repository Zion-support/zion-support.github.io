import Link from 'next/link'
import { ArrowRight, Brain, Cloud, Shield } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <header className="relative overflow-hidden bg-black/20 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">Zion Tech Group</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Advanced Technology
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Solutions
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
              Leading provider of innovative technology solutions, AI services, and digital transformation solutions.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/services"
                className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 flex items-center gap-2"
              >
                Explore Services
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="text-sm font-semibold leading-6 text-white hover:text-gray-300"
              >
                Get in touch <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Why Choose Zion Tech Group?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We deliver cutting-edge solutions that drive innovation and growth.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <Brain className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
                  AI-Powered Solutions
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">
                    Leverage artificial intelligence to automate processes, gain insights, and drive innovation.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <Cloud className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
                  Cloud Infrastructure
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">
                    Scalable, secure, and reliable cloud solutions that grow with your business needs.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <Shield className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
                  Enterprise Security
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">
                    Comprehensive security solutions to protect your data and infrastructure.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <footer className="bg-black/20 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Brain className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-semibold text-white">Zion Tech Group</span>
            </div>
            <p className="text-sm text-gray-400">
              © 2025 Zion Tech Group. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}