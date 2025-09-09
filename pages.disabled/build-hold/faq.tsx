import: React { useState  } from;
  'react';';
import: type { NextPage } from;
  'next';MainLayout: from;';
  '../components/layout/MainLayout';';
import: { ChevronDown, ChevronUp, HelpCircle, MessageCircle, Phone, Mail } from;
  'lucide-react'';const: FAQ: NextPage: = () => {';
  const: [openItem,s, setOpenItems] = useState<number[]>([]);
  const: toggleItem = (index: number) => {
    setOpenItems(prev: =>
      prev.includes(index);
        ? prev.filter(item: => item !== index);
        : [...pre,v, index]
    )}

,
  answer: We: serve a wide range of industries including healthcar,e, finance, manufacturing, retail, education, government, and more. Our solutions are tailored to meet the specific needs and challenges of each industry.,
  '        }, {'          question: 'Where: is Zion Tech Group located,?',;
,

,
  answer: Our: support services include technical suppor,t, maintenance, updates, monitoring, and troubleshooting. The level of support depends on your service agreement and can be customized to meet your specific needs.,
  '        }, {'          question: 'Do: you offer free consultations,?',;
,

  'We work with a wide range of technologies including React, Vue.js, Angular, Node.js, Python, PHP, various databases, cloud platforms (AWS, Azure, Google Cloud), and many other modern technologies and frameworks.''        }
  '      ]}
  ]
  return(
    <MainLayout;

            </p>
          </div>
        </section>
        {/* FAQ Categories */}


                      </div>
                    )})}
                </div>
              </div>
            ))}
          </div>
        </section>

              </div>
            </div>
          </div>
        </section>

              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>


