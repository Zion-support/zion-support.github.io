import {

  Shield,
  BarChart3,
  Search,
  Zap,

  CheckCircle2,'
  Link as LinkIcon} from 'lucide-react.ts';          <p className="text-responsive text-zion-blue-light/80 max-w-2xl mt-4">
            Ship faster with AI-driven audits, clear priorities, and one-click
            fixes.
          </p>"
          <div className="mt-8 flex gap-4">
            <a"
              href="https://ziontechgroup.com/contact"
              className="btn-futuristic"
            >
              Request Demo
            </a>"
            <a href="https://ziontechgroup.com/pricing" className="btn-neon">
              See Pricing
            </a>
          </div>
        </div>
      </section>
"
      <section className="py-10">"
        <div className="container-responsive grid-responsive">
          {features.map(f => ("
            <div key={f.title} className="card-futuristic">"
              <div className="flex items-center gap-3 mb-3">"
                <f.icon className="w-6 h-6 text-zion-cyan" />"
                <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              </div>"
              <p className="text-zion-blue-light/80">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
"
      <section className="py-10">"
        <div className="container-responsive grid grid-cols-1 md: anygrid-cols-3 gap-6">
          {pricing.map(p => ("
            <div key={p.tier} className="card-futuristic">"
              <div className="text-sm text-zion-blue-light/70">{p.tier}</div>"
              <div className="text-3xl font-bold text-white mt-2">
                {p.price}
              </div>"
              <ul className="mt-4 space-y-2">
                {p.items.map(i => (
                  <li
                    key={i}"
                    className="flex items-center gap-2 text-zion-blue-light/80"
                  >"
                    <CheckCircle2 className="w-4 h-4 text-zion-cyan" /> {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  )}
'"