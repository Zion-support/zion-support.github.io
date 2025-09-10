ursor/fix-syntax-push-and-merge-to-main-40de
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className=\"flex items-center text-sm text-gray-600\">
                      <Check className=\"w-4 h-4 text-green-500 mr-2\" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href={service.href}
                  className=\"inline-flex items-center text-blue-600 hover:text-blue-700 font-medium\"
                >
                  Learn More
                  <ArrowRight className=\"w-4 h-4 ml-1\" />
                </Link>
              </div>
            ))}
          </div>                href=\"/contact\"

