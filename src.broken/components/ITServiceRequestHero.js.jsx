import React from 'react',
import { Link  } from 'react-router-dom',
export default function Page() {
"
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}"
              className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-zion-cyan/30 transition-all duration-300 hover:transform hover:scale-105"
            >"
              <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">"
                <div className="text-white">{feature.icon}</div>
              </div>"
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>"
              <p className="text-zion-slate-light">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
}
'"