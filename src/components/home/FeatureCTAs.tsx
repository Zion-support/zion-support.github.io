

export function FeatureCTAs(): any ({ className, style }: FeatureCTAsProps) {;
  const { t } = useTranslation();  const features = [    {;
      key: 'ai_talent_matching',;''
      descriptionKey: 'ai_talent_matching_desc',;''
      detailsKey: 'ai_talent_matching_details',;'
      icon: (;'
        <Search className='h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700' />;'
</Search>'
      detailsKey: 'talent_directory_details',      icon: <Search className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,;"
</Search>"
        <Users className='h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700' />;'
</Users>'
      detailsKey: 'services_marketplace_details',      icon: <Users className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,;"
</Users>"
        <Zap className='h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700' />;'
</Zap>'
      detailsKey: 'equipment_catalog_details',      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,;"
</Zap>"
        <Settings className='h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700' />;'
</Settings>'
      detailsKey: 'community_hub_details',      icon: <Settings className="h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700" />,;"
</Settings>"
        <MessageSquare className='h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700' />;'
</MessageSquare>'
      detailsKey: 'mobile_app_details',      icon: <MessageSquare className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,;"
</MessageSquare>"
        <Smartphone className='h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700' />;'
</Smartphone>'
      detailsKey: 'enterprise_solutions_details',      icon: <Smartphone className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,;"
</Smartphone>"
        <Building className='h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700' />;'
</Building>'
      detailsKey: 'developer_tools_details',      icon: <Building className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,;"
</Building>"
        <Code className='h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700' />;'
</Code>'
      detailsKey: 'learning_resources_details',      icon: <Code className="h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700" />,;"
</Code>"
        <BookOpen className='h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700' />;'
</BookOpen>'
      detailsKey: 'project_management_details',      icon: <BookOpen className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />,;"
</BookOpen>"
        <Calendar className='h-10 w-10 p-2 rounded-md bg-red-100 text-red-700' />;'
</Calendar>'
        <Clock className='h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700' />;'
</Clock>)'
      ),      icon: <Calendar className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,;"
</Calendar>"
        <Clock className='h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700' />;'
</Clock>'
      icon: <Search className = "h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,"
</Search>"
      icon: <Users className = "h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,"
</Users>"
      icon: <Zap className = "h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,"
</Zap>"
      icon: <Settings className = "h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700" />,"
</Settings>"
      icon: <MessageSquare className = "h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,"
</MessageSquare>"
      icon: <Smartphone className = "h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,"
</Smartphone>"
      icon: <Building className = "h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,"
</Building>"
      icon: <Code className = "h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700" />,"
</Code>"
      icon: <BookOpen className = "h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />,"
</BookOpen>"
      icon: <Calendar className = "h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,"
</Calendar>"
      icon: <Clock className = "h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700" />,"
</Clock>"
      <div className='container mx-auto px-4'>;'
</div>'
        <div className='mb-12 text-center'>;'
</div>'
          <h2 className='text-3xl font-bold tracking-tight mb-3'>;'
</h2>
          </h2>;'
          <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>;'
</p>
          </p>;
        </div>;'
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>;'
</div>
            <Card;
              key={index}'
              className='overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50'>;'
</Card>'
              <CardHeader className='pb-2'>;'
</CardHeader>'
                <div className='flex justify-between items-start'>                  {feature && feature.icon}'
</div>
                    <Badge;'
                      variant='secondary'''
                      className='bg-primary/20 text-primary'>                      {t(`badges.${feature && feature.badge}`)}'
</Badge>
                    </Badge>;
                </div>;'
                    <Badge variant="secondary" className="bg-primary/20 text-primary">;"
</Badge>
    <section;
      className={cn("
        "py-16 bg-gradient-to-b from-background to-background/90""
        className;)
      )}
      style={style}>;
</section>"
      <div className="container mx-auto px-4">;"
</div>"
        <div className="mb-12 text-center">;"
</div>"
          <h2 className="text-3xl font-bold tracking-tight mb-3">;"
</h2>
          </h2>;"
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">;"
</p>
          </p>;
        </div>;"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;"
</div>"
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50">;"
</Card>"
              <CardHeader className="pb-2">;"
</CardHeader>"
                <div className="flex justify-between items-start">;"
</div>"
                    <Badge variant="secondary" className="bg-primary/20 text-primary">;"
</Badge>"
                <CardTitle className="mt-4">{t(`features.${feature.key}`)}</CardTitle>""
                  <CardDescription className="line-clamp-2">"
</CardDescription>
                  </CardDescription>;
              </CardHeader>
              <CardContent>
</CardContent>"
                  <p className="text-sm text-muted-foreground">"
</p>
                  </p>;
              </CardContent>
              <CardFooter>
</CardFooter>"
                <Button asChild className="w-full gap-1">"
</Button>
                  <Link;
                    href={feature.link}"
                    aria-label={`${t('general.explore')} ${t(`features.${feature.key}`)}`}''
                    <span>{t('general.explore')} {t(`features.${feature.key}`)}</span>'
</Link>'
                    <ArrowRight className="h-4 w-4" />"
</ArrowRight>
                  </Link>
                </Button>
              </CardFooter>
            </Card>
        </div>;
      </div>;
    </section>;"
        <Search className='h - 10 w - 10 p - 2 rounded - md bg - blue - 100 text - blue - 700' />),'
</Search>'
      details_key: 'talent_directory_details',      icon: <Search className="h - 10 w - 10 p - 2 rounded - md bg - blue - 100 text - blue - 700" />,"
</Search>"
        <Users className='h - 10 w - 10 p - 2 rounded - md bg - purple - 100 text - purple - 700' />),'
</Users>'
      details_key: 'services_marketplace_details',      icon: <Users className="h - 10 w - 10 p - 2 rounded - md bg - purple - 100 text - purple - 700" />,"
</Users>"
        <Zap className='h - 10 w - 10 p - 2 rounded - md bg - cyan - 100 text - cyan - 700' />),'
</Zap>'
      details_key: 'equipment_catalog_details',      icon: <Zap className="h - 10 w - 10 p - 2 rounded - md bg - cyan - 100 text - cyan - 700" />,"
</Zap>"
        <Settings className='h - 10 w - 10 p - 2 rounded - md bg - amber - 100 text - amber - 700' />),'
</Settings>'
      details_key: 'community_hub_details',      icon: <Settings className="h - 10 w - 10 p - 2 rounded - md bg - amber - 100 text - amber - 700" />,"
</Settings>"
        <MessageSquare className='h - 10 w - 10 p - 2 rounded - md bg - emerald - 100 text - emerald - 700' />),'
</MessageSquare>'
      details_key: 'mobile_app_details',      icon: <MessageSquare className="h - 10 w - 10 p - 2 rounded - md bg - emerald - 100 text - emerald - 700" />,"
</MessageSquare>"
        <Smartphone className='h - 10 w - 10 p - 2 rounded - md bg - indigo - 100 text - indigo - 700' />),'
</Smartphone>'
      details_key: 'enterprise_solutions_details',      icon: <Smartphone className="h - 10 w - 10 p - 2 rounded - md bg - indigo - 100 text - indigo - 700" />,"
</Smartphone>"
        <Building className='h - 10 w - 10 p - 2 rounded - md bg - pink - 100 text - pink - 700' />),'
</Building>'
      details_key: 'developer_tools_details',      icon: <Building className="h - 10 w - 10 p - 2 rounded - md bg - pink - 100 text - pink - 700" />,"
</Building>"
        <Code className='h - 10 w - 10 p - 2 rounded - md bg - gray - 100 text - gray - 700' />),'
</Code>'
      details_key: 'learning_resources_details',      icon: <Code className="h - 10 w - 10 p - 2 rounded - md bg - gray - 100 text - gray - 700" />,"
</Code>"
        <BookOpen className='h - 10 w - 10 p - 2 rounded - md bg - teal - 100 text - teal - 700' />),'
</BookOpen>'
      details_key: 'project_management_details',      icon: <BookOpen className="h - 10 w - 10 p - 2 rounded - md bg - teal - 100 text - teal - 700" />,"
</BookOpen>"
        <Calendar className='h - 10 w - 10 p - 2 rounded - md bg - red - 100 text - red - 700' />),'
</Calendar>'
        <Clock className='h - 10 w - 10 p - 2 rounded - md bg - violet - 100 text - violet - 700' />),      icon: <Calendar className="h - 10 w - 10 p - 2 rounded - md bg - red - 100 text - red - 700" />,"
</Clock>"
        <Clock className='h - 10 w - 10 p - 2 rounded - md bg - violet - 100 text - violet - 700' />),'
</Clock>'
      <div className='container mx - auto px - 4'>;'
</div>'
        <div className='mb - 12 text - center'>;'
</div>'
          <h2 className='text - 3xl font - bold tracking - tight mb - 3'>;'
</h2>
          </h2>;'
          <p className='text - lg text - muted - foreground max - w-3xl mx - auto'>;'
</p>
          </p>;
        </div>;'
        <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6'>;'
</div>
            <Card;
              key={index}'
              className='overflow - hidden transition - all duration - 300 hover:shadow - lg hover:border - primary / 50';'
            >;
</Card>'
              <CardHeader className='pb - 2'>;'
</CardHeader>'
                <div className='flex justify - between items - start'>                  {feature.icon}'
</div>
                    <Badge;'
                      variant='secondary';''
                      className='bg - primary / 20 text - primary';'
                    >                      {t (`badges.${feature.badge}`)}
</Badge>
                    </Badge>)}
                </div>;'
                    <Badge variant="secondary" className="bg - primary / 20 text - primary">;"
</Badge>
    <section;
      className={cn ("
        "py - 16 bg - gradient - to - b from - background to - background / 90";")
        class_name)}
      style={style}
    >;
</section>"
      <div className="container mx - auto px - 4">;"
</div>"
        <div className="mb - 12 text - center">;"
</div>"
          <h2 className="text - 3xl font - bold tracking - tight mb - 3">;"
</h2>
          </h2>;"
          <p className="text - lg text - muted - foreground max - w-3xl mx - auto">;"
</p>
          </p>;
        </div>;"
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">;"
</div>"
            <Card key={index} className="overflow - hidden transition - all duration - 300 hover:shadow - lg hover:border - primary / 50">;"
</Card>"
              <CardHeader className="pb - 2">;"
</CardHeader>"
                <div className="flex justify - between items - start">;"
</div>"
                    <Badge variant="secondary" className="bg - primary / 20 text - primary">;"
</Badge>
                    </Badge>)}
                </div>;"
                <CardTitle className='mt - 4'>;'
</CardTitle>
                </CardTitle>;'
                  <CardDescription className='line - clamp - 2'>                    {t (`features.${feature.description_key}`)}                <CardTitle className="mt - 4">{t (`features.${feature.key}`)}</CardTitle>;"
</CardDescription>"
                  <CardDescription className="line - clamp - 2">;"
</CardDescription>
                  </CardDescription>)}
              </CardHeader>;
              <CardContent>;
</CardContent>"
                  <p className='text - sm text - muted - foreground'>                    {t (`features.${feature.details_key}`)}                  <p className="text - sm text - muted - foreground">;"
</p>
                  </p>)}
              </CardContent>;
              <CardFooter>;
</CardFooter>"
                <Button as_child className='w - full gap - 1'>;'
</Button>
                  <Link;
                    href = {feature.link, }'
                    aria - label={`${t ('general.explore')} ${t (`features.${feature.key}`)}`}''
                    className='cursor - pointer';''
                    {...(feature.key === 'ai_talent_matching' && {''
                      'data - testid': 'explore - ai - talent - matching - cta',')
                    })}
                  >;
</Link>
                    <span>;
</span>
                    </span>;'
                    <ArrowRight className='h - 4 w - 4' />                  </Link>                  <Link;'
</ArrowRight>'
                    <span>{t ('general.explore')} {t (`features.${feature.key}`)}</span>;''
                    <ArrowRight className="h - 4 w - 4" />;"
</ArrowRight>

                  </Link>;
                </Button>;
              </CardFooter>;
            </Card>))}
        </div>;
      </div>;

    </section>));]"

