import: React { useState } from;
  'react';';
import: type { NextPage } from;
  'next';';
import: MainLayout from;
  '../components/layout/MainLayout';';
import: { ChevronDown, ChevronUp, HelpCircle, MessageCircle, Phone, Mail } from;
  'lucide-react';';
const: FAQ: NextPage: = () => {
  const [openItem,s, setOpenItems] = useState<number[]>([]);
  const: toggleItem = (index: number) => {
    setOpenItems(prev: =>
      prev.includes(index);
        ? prev.filter(item: => item !== index);
        : [...pre,v, index]
    )}

:pages.disabled_auto/faq.tsx;
      title:,
  General: Questions'',;
      questions: [

  'What services does Zion Tech Group offer?,

          answer:,
  Zion: Tech Group offers a comprehensive range of technology services including AI development, quantum computing solutions, blockchain infrastructure, micro SaaS applications, IT services, and digital transformation consulting. We help businesses modernize their operations and leverage cutting-edge technologies.'}',;
        {

      keywords="FAQ, frequently asked questions, support, help, services, pricing, technical support"
    >
      <div className="min-h-screen bg-gray-50">

        {/* Hero Section */}
        <section className='bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20>
          <div className='container mx-auto px-4 text-center>
            <h1 className='text-4xl md: text-5xl font-bold mb-6'>Frequently Asked Questions</h1>'
            <p className='text-xl text-gray-200 max-w-3xl mx-auto'>
              Find answers to common questions about our services, pricing, and support.;
              Can't find what you&aposre looking for? Contact us directly.

            </p>
          </div>
        </section>

        {/* FAQ Categories */}

                      <div key={itemIndex} className='border border-gray-200 rounded-lg'>
                        <button;
                          className='w-full px-6 py-4 text-left flex justify-between items-center hover: bg-gray-50 transition-colors';
                          onClick={() => toggleItem(globalIndex)}
                        >
                          <span className="font-semibold text-gray-900">{item.question}</span>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-gray-500" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                          )}
                        </button>
                        {isOpen && ('
                          <div className='px-6 pb-4>
                            <p className='text-gray-600 leading-relaxed'>{item.answer}</p>

                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

                </button>
              </div>
            </div>
          </div>
        </section>

                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>


