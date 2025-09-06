export interface Benefit {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface Testimonial {
  name: string;
  role?: string;
  text: string;
  avatar?: string;
}

interface ServiceLandingTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  benefits: Benefit[];
  features?: string[];
  stats?: Array<{ label: string; value: string }>;
  ctaText: string;
  ctaLink: string;
}

export const ServiceLandingTemplate: React.FC<ServiceLandingTemplateProps> = ({
  title,
  subtitle,
  description,
  benefits,
  features = [],
  stats = [],
  ctaText,

  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {subtitle}
          </p>
          {heroImage && (
            <div className='mx-auto mt-8 rounded-lg shadow-xl max-w-3xl relative h-80'>
              <Image

                className="object-cover rounded-lg"
                loading="lazy"

              />

            </div>
          )}
        </div>
      </section>

      <section className='py-12 px-4'>
        <div className='container mx-auto text-center'>
          <p className='text-lg text-zion-slate-light max-w-3xl mx-auto'>            {description}

            {description}

          </p>
        </div>
      </section>

      <section className='py-16 bg-zion-blue-light'>
        <div className='container mx-auto px-4'>
          <h2 className='text-2xl font-bold text-white text-center mb-8'>

            Benefits
          </h2>

              >
                {benefit.icon && (
                  <div className='mb-4 flex justify-center text-zion-cyan'>
                    {benefit.icon}
                  </div>
                )}
                <h3 className='text-lg font-bold mb-2'>{benefit.title}</h3>
                <p className='text-zion-slate-light'>{benefit.description}</p>              </div>

              </div>

            ))}
          </div>
        </div>
      </section>

      <section className='py-16 bg-zion-blue'>
        <div className='container mx-auto px-4'>
          <h2 className='text-2xl font-bold text-white text-center mb-8'>

            What Our Clients Say
          </h2>

              >
                <CardContent className='pt-6'>
                  <p className='text-gray-200 mb-6'>"{t.text}"</p>
                </CardContent>
                <CardFooter className='border-t border-zion-purple/20 pt-4'>
                  <div className='flex items-center'>                    {t.avatar && (

                    {t.avatar && (

                      <Image

                      />
                    )}
                    <div>
                      <p className='font-semibold text-white'>{t.name}</p>
                      {t.role && (
                        <p className='text-sm text-gray-400'>{t.role}</p>                      )}

                      )}

                    </div>
                  )}
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className='py-12 bg-zion-blue-dark text-center'>
        <Button
          size='lg'
          className='bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white'          asChild

          asChild

        >
          <a href={ctaLink}>{ctaText}</a>
        </Button>
      </section>
    </div>
  );
};
"