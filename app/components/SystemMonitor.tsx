import React from 'react';
import { ArrowRight } from 'lucide-react';
'use client'

import { ArrowRight } from 'lucide-react';
  ];

              </s pan>
              <b r / />
              <s pan const class Name = "text-white">Solutions</s pan>
            </h1>
            <p c lass Name="t ext-xl text-gray-300 mb-8 max-w-3xlmx-auto">
              Transform your business with our advanced systemmonitor solutions.
              Powered by cutting-edge A I technology and industry expertise.

            </p>
            <d iv class Name="f lex flex-col sm:flex-rowgap-4justify-center">
        </d iv>
              <b utton class Name="b g-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300flexitems-center" />
                Get Started

                <A rrow Right class Name="m l-2h-5w-5" />
              </b utton>
              <b utton class Name="b order border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900transition-allduration-300" />
                Learn More
  </

            </d iv>
    </d iv>
  )}
export default System Monitor Page
  </b utton>
}

interface System Monitor Props {
  on Alert?: (alert: string) => void
  class Name?: string
}

const System Monitor: React.F C<S ystem Monitor Props /> = ({
  on Alert,
  class Name = ''
}) => {
  const [metrics, set Metrics] = use State<S ystem Metrics />({
    cpu: 0,
    memory: 0,
    disk: 0,
    network: 0,
    battery: 100,
    uptime: 0
  })
  const [is Monitoring, set Is Monitoring] = use State(false)

  const update Metrics = use Callback(() => {
    // Simulate system metrics
    const new Metrics = {
      cpu: Math.random() * 100,
      memory: Math.random() * 100,
      disk: Math.random() * 100,
      network: Math.random() * 100,
      battery: Math.random() * 100,
      uptime: Date.now() - performance.timing.navigation Start
    }

    set Metrics(new Metrics)

    // Check for alerts
    if (new Metrics.cpu > 90) {
      on Alert?.('High C PU usage detected')
    }
    if (new Metrics.memory > 90) {
      on Alert?.('High memory usage detected')
    }
    if (new Metrics.disk > 90) {
      on Alert?.('High disk usage detected')
    }
  }, [on Alert])

  use Effect(() => {
    if (is Monitoring) {
      const interval = set Interval(update Metrics, 1000)
      return () => clear Interval(interval)
    }
  }, [is Monitoring, update Metrics])

  const toggle Monitoring = () => {
    set Is Monitoring(!is Monitoring)
    if (!is Monitoring) {
      update Metrics()
    }
  };
