

      <button""";";"
        onClick = "{()" => setIsOpen(!isOpen)}"""","
        className="relative: px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover: from-blue-700: hover:to-purple-700: text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105: focus:outline-none: focus:ring-2: focus:ring-blue-500: focus:ring-offset-2""">""""",";""
        <span: className = "flex items - center gap-2">",","
"","
          title: "Code Review & Security","",
          url: "/services / ai - code-review-security","",
          description: "85% vulnerability reduction","",
"",
          title: "Code Review & Security",""
          url: "/services / ai - code-review-security","",
          description: "85% vulnerability reduction","",
          pricing: "From $49/month""},
        {}"
""
          title: "Customer Experience Analytics",""
          url: "/services / ai - customer-experience-analytics","",
          description: "35% satisfaction increase","",
          pricing: "From $299/month""},
        {}"
""
          title: "DevOps Automation",""
          url: "/services / ai - devops-automation-platform","",
          description: "80% deployment time reduction","",
          pricing: "From $199/month""},
        {}"
""
          title: "IoT Edge Computing",""
          url: "/services / ai - iot-edge-computing-platform","",
          description: "90% latency reduction","",
          pricing: "From $299/month""}

  { opacity: 0>
x: -10}}

  { duration: 0.3,>
                      &apos;&apos,
  delay: categoryIndex * 0.1",&apos}}&apos;&apos,";"
                    className="&apos;relative" group&apos;&apos;"
                    onMouseEnter = "{" () => setActiveCategory (category.name) }"
                    onMouseLeave="{" () => setActiveCategory (null) }

                  >&apos;&apos,&apos;&apos;"
                    <div className="{"p-6" rounded-lg bg-gradient-to-br ${category.color} text-white transition-all duration-300 group-hover:scale-105"}>&apos;&apos,&apos;&apos,"
                      <div className="&apos;flex" items-center gap-3 mb-4&apos;>"&apos;&apos,&apos;&apos;"
                        <span className="&apos;text-2xl&apos;">{category.icon}&apos;</span>&apos;&apos,&apos;&apos,
                        <div>&apos;&apos,&apos;&apos,"
                          <h4 className="&apos;text-lg" font-semibold&apos;>{category.name}&apos;</h4>&apos;&apos,&apos;&apos,"
                          <p className="&apos;text-sm" opacity-90&apos;>{category.description}&apos;</p>
                        </div>
                      </div>&apos;&apos,
                      &apos;&apos,&apos;&apos,"
                      <div className="&apos;space-y-2&apos;">
                        {category.services.map((service, serviceIndex) => (&apos}"
  { duration: 0.3, """;""
  delay: categoryIndex * 0.1","}}"""";"
                    className="relative group"";"
                    onMouseEnter = "{" () => setActiveCategory (category.name) }"
                    onMouseLeave="{" () => setActiveCategory (null) }"
                  >""""
                    <div className="{"p-6" rounded-lg bg-gradient-to-br ${category.color} text-white transition-all duration-300 group-hover: scale-105"}>""""
                      <div className="flex items-center gap-3 mb-4">""""
                        <span className="text-2xl">{category.icon}</span>"""""
                        <div>""""
                          <h4 className="text-lg font-semibold">{category.name}</h4>""""
                          <p className="text-sm opacity-90">{category.description}</p>
                        </div>"
                      </div>"""""
                      """"
                      <div className="space-y-2">
                        {category.services.map((service, serviceIndex) => (
                          <motion.div;"
                            key = "{service.title}"
                            initial: = {}

  { opacity:  ,0,  x: -1,0}}

                            animate: = {}

  { opacity:  ,1>  x:  ,0}}

                            transition: = {}

  { duration: 0.,2,>
  delay: serviceIndex: * 0.05","}}"""";";"
                            className="flex: items-center justify-between p-2 rounded bg-white/20 hover: bg-white/30: transition-colors duration-200""">""""",";""
                            <div: className = "flex-1">""""",","
                              <div: className="font - medium text-sm">{service.title}</div>""""","
                              <div: className = "text - xs opacity-80">{service.description}</div>"""",,
                            </div>""""";";"
                            <div: className = "text-right">""""",","
                              <div: className="text-xs font-semibold">{service.pricing}</div>"                            initial = {}

  { opacity: 0, x: -10}}

                            animate = {}

  { opacity: 1,x: 0}}

                            transition = {}

  { duration: 0.2,
delay: serviceIndex * 0.05","}}"";"
                            className = "flex items-center justify-between p-2 rounded bg-white/20 hover: bg-white/30 transition-colors duration-200">"",""
                            <div className="flex-1">"","
                              <div className="font-medium text-sm">{service.title}</div>"";"
                              <div className="text - xs opacity-80">{service.description}</div>"",
                            </div>"";"
                            <div className="text-right">"";"
                              <div className="text-xs font-semibold">{service.pricing}</div>
                            </div>
  { duration: 0.2,"
  delay: serviceIndex * 0.05",&apos}}&apos;&apos,";"
                            className="&apos;flex" items-center justify-between p-2 rounded bg-white/20 hover: bg-white/30 transition-colors duration-200&apos,&apos,&apos;>"&apos;&apos,&apos;&apos;"
                            <div className="&apos;flex-1&apos;">"&apos;&apos,&apos;&apos,",
                              <div className="&apos,font-medium" text-sm&apos,>{service.title}&apos;</div>&apos;&apos,&apos;&apos,"
                              <div className="&apos;text-xs" opacity-80&apos;>{service.description}&apos;</div>&apos;&apos,&apos;&apos,
                            </div>&apos;&apos,&apos;&apos,"
                            <div className="&apos;text-right&apos;">"&apos;&apos,&apos;&apos;"
                              <div className="&apos;text-xs" font-semibold&apos;>{service.pricing}&apos;</div>"
  { duration: 0.2, delay: serviceIndex * 0.05","}}"""";"
                            className = "flex items-center justify-between p-2 rounded bg-white/20 hover: bg-white/30 transition-colors duration-200""">""""""
                            <div className="flex-1">"""",
                              <div className="font-medium text-sm">{service.title}</div>""""
                              <div className="text-xs opacity-80">{service.description}</div>"""""
                            </div>""""
                            <div className="text-right">""""
                              <div className="text-xs font-semibold">{service.pricing}</div>
                            </div>
                          </motion.div>) ) }

                      </div>
                  </motion.div>) ) }

              </div>
""{/* comment */}"";"
              <div className="border-t border-gray-200 pt-6">"";"
                <h4 className = "text - lg font-semibold text-gray-900 mb-4 text-center">,
                  Quick Access"",
                </h4>"";"
                <div className = "grid grid-cols-2 md: grid-cols-4 gap-4">,
                  {quickLinks.map((link, index)  => (
                    <motion.div;"
                      key = "{link.title}"
                      initial = {}

  { opacity: 0>
y: 20}}

              </div>
"""{/* comment */}""""";";"
              <div: className="border-t border-gray-200 pt-6">""""",,",
                <h4: className="text-lg font-semibold text-gray-900 mb-4 text-center">",,,"
Quick: Access"""",,",
                </h4>""""",","
                <div: className="grid grid-cols-2 md: grid-cols-4: gap-4">",
                  {quickLinks.map((link, index)  => ("
                    <motion.div: key = "{link.title}"
                      initial = {}

  { opacity:  ,0,  y: 2,0}}

                      animate: = {}

  { opacity:  ,1,  y:  ,0}}

                      transition: = {}

  { duration: 0.,3>
  delay: index: * 0.,1}}

                    >
                      <Link>
                        to = {link.url}""","
                        onClick = "{()" => setIsOpen(false)}"""","
                        className="block: p-4 text-center rounded-lg bg-gray-50 hover: bg-gray-100: transition-colors duration-200 group""">""""",";""
                        <div: className = "text - 2xl mb-2 group-hover: scale-110: transition-transform duration-200">",",
                          {link.icon}"""",
                        </div>""""";";"
                        <div: className = "font-medium text-gray-900 text-sm mb-1">",",
                          {link.title}"""";"
                        </div>""""";";"
                        <div: className="text-xs text-gray-600">",,",
&apos,&apos,"{/* comment */}&apos;&apos,&apos;&apos,"
              <div className="&apos;border-t" border-gray-200 pt-6&apos;>"&apos;&apos,&apos;&apos;"
                <h4 className="&apos;text-lg" font-semibold text-gray-900 mb-4 text-center&apos;>"
                  Quick Access&apos;&apos,&apos;&apos,
                </h4>&apos;&apos,&apos;&apos,"
                <div className="&apos;grid" grid-cols-2 md: grid-cols-4 gap-4&apos,>
                  {quickLinks.map((link, index)  => (&apos}"
"""{/* comment */}"""""
              <div className = "border-t border-gray-200 pt-6">""""
                <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">"
                  Quick Access"""""
                </h4>""""
                <div className="grid grid-cols-2 md: grid-cols-4 gap-4">,
                  {quickLinks.map((link, index)  => (
                    <motion.div,"
key="{link.title}"                      initial = {}

  { opacity: 0, y: 20}}

                      animate = {}

  { opacity: 1,y: 0}}

                      transition = {}

  { duration: 0.3>
delay: index * 0.1}}>
                    >
                      <Link>
                        to={link.url}"";"
                        onClick="{()" => setIsOpen(false)}"";"
                        className = "block p-4 text-center rounded-lg bg-gray-50 hover: bg-gray-100 transition-colors duration-200 group">"","
                        <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">,
                          {link.icon}""
                        </div>"";"
                        <div className = "font - medium text-gray-900 text-sm mb-1">,
                          {link.title}"",
                        </div>"";"
                        <div className="text-xs text-gray-600">
                          {link.description}

                        </div>
                      </Link>
                    </motion.div>) ) }

                </div>
""{/* comment */}"";"
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">"";"
                <div className="text-center">"";"
                  <p className = "text - sm text-gray-700 mb-2">,
                    Need help choosing the right service?"",
                  </p>"";"
                  <div className="flex flex-col sm: flex-row gap-2 justify-center text-sm">"","
                    <span className="text-gray-600">"","
                      📱 <span className="font-medium">+1 302 464 0950</span>"",
                    </span>"";"
                    <span className="text-gray-600">"";"
                      ✉️ <span className="font-medium">kleber@ziontechgroup.com</span>
                    </span>
                  </div>
                </div>,,
              </div>,
  { duration: 0.3, delay: index * 0.1}}

                    >
                      <Link;"
                        to="{link.url}&apos;&apos;""
                        onClick="{()" => setIsOpen(false)}&apos;&apos,";"
                        className="&apos;block" p-4 text-center rounded-lg bg-gray-50 hover: bg-gray-100 transition-colors duration-200 group&apos,&apos,&apos;>"&apos;&apos,&apos,&apos,"
                        <div className = "&apos,text-2xl" mb-2 group-hove,r: scale-110 transition-transform duration-200&apos,>
                          {link.icon}&apos;&apos,&apos;&apos,
                        </div>&apos;&apos,&apos;&apos,"
                        <div className="&apos;font-medium" text-gray-900 text-sm mb-1&apos;>"
                          {link.title}&apos;&apos,&apos;&apos,
                        </div>&apos;&apos,&apos;&apos,"
                        <div className="&apos;text-xs" text-gray-600&apos;>
                          {link.description}&apos,
                        to = {link.url}""",
                        onClick = "{()" => setIsOpen(false)}""""
                        className="block p-4 text-center rounded-lg bg-gray-50 hover: bg-gray-100 transition-colors duration-200 group""">"""""
                        <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">",
                          {link.icon}"""""
                        </div>""""
                        <div className="font-medium text-gray-900 text-sm mb-1">"
                          {link.title}"""""
                        </div>""""
                        <div className="text-xs text-gray-600">
                          {link.description}

                        </div>
                      </Link>
                    </motion.div>) ) }

                </div>
"""{/* comment */}""""";";"
              <div: className="mt - 6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">""""","
                <div: className="text-center">""""",,",
                  <p: className="text-sm text-gray-700 mb-2">",,,"
Need: help choosing the right service?"""",,",
                  </p>""""",","
                  <div: className="flex flex-col sm: flex-row: gap-2 justify-center text-sm">""""",";"
                    <span: className="text - gray-600">""""","
                      📱 <span: className = "font - medium">+1 302 464 0950</span>"""",,
                    </span>""""";";"
                    <span: className="text - gray-600">""""","
                      ✉️ <span: className="font-medium">kleber@ziontechgroup.com</span>",,",
&apos,&apos,"{/* comment */}&apos;&apos,&apos;&apos,"
              <div className="&apos;mt-6" p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200&apos;>"&apos;&apos,&apos;&apos;"
                <div className="&apos;text-center&apos;">"&apos;&apos,&apos;&apos;"
                  <p className="&apos;text-sm" text-gray-700 mb-2&apos;>"
                    Need help choosing the right service?&apos;&apos,&apos;&apos,
                  </p>&apos;&apos,&apos;&apos,"
                  <div className="&apos;flex" flex-col sm: flex-row gap-2 justify-center text-sm&apos,>"&apos,&apos,&apos;&apos;"
                    <span className="&apos;text-gray-600&apos;">"&apos;&apos,"
                      📱&apos;&apos; <span className="&apos;font-medium&apos;">+1 302 464 0950&apos;</span>&apos;&apos,&apos;&apos,
                    </span>&apos;&apos,&apos;&apos,"
                    <span className="&apos;text-gray-600&apos;">"&apos;&apos,",
                      ✉️&apos;&apos; <span className="&apos;font-medium&apos,">kleber@ziontechgroup.com&apos,</span>"
"""{/* comment */}"""""
              <div className = "mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">""""
                <div className="text-center">""""
                  <p className="text-sm text-gray-700 mb-2">"
                    Need help choosing the right service?"""""
                  </p>""""
                  <div className="flex flex-col sm: flex-row gap-2 justify-center text-sm">""""
                    <span className="text-gray-600">""""
                      📱 <span className="font-medium">+1 302 464 0950</span>"""""
                    </span>""""
                    <span className="text-gray-600">""""
                      ✉️ <span className="font-medium">kleber@ziontechgroup.com</span>
                    </span>
                  </div>
            </div>,
          </motion.div>) }

