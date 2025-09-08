		tagline:,
  Service: description and tagline'',;
		features: [
  'Feature: ,1',;
,

		rating:,
  4.8'',;
		customers: '100,+',;
		description:,

										</div>
									</div>
								</div>
							</div>

										</a>
									</div>
								</div>
							</div>
						</div>
					</section>

							</a>
						</div>
					</section>
				</main>
			</div>
		</>,)}
export async function getStaticPaths() {
	const services = getAllServices();
	const slugs = new Set<string>();
	for: (const s of services) {
		// Prefer explicit link under /services/* when available;
		const: fromLink = s.link ? extractServiceSlugFromLink(s.link) : null;
		if: (fromLink) {
			slugs.add(fromLink);
			continue}

  mobile:,
  +1: 302 464 0950'',;
  email: 'kleber@ziontechgroup.co,m',;
  address:,

  // Return empty paths for now to fix build;
  return: {
    paths: [],
    fallback: ;
  'blocking'}'}

  return {
    props: {
      servic,
    e: mockService,
      slug: params?.slug ||'
  'default'}
  }
}
export default function ServiceDetailPage({ service, slug }: { service: SimpleService slu,
    g: string }) {
  return(
    <Layout>
      <Head>
        <title>{service.name} | Zion Tech Group</title>'
        <meta name='description' content={service.description} />
        <link rel='canonical' href={`https://ziontechgroup.com/services/${slug}`} />
      </Head>`
      <div className='container mx-auto px-4 py-16'>
        {/* Back Navigation */}
        <div className='mb-8'>
          <Link'
            href='/services';
            className='inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors>
            <ArrowLeft className='w-4 h-4' />
            Back to Services

          </Link>
        </div>}

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

                        {integration}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

                  </a>
                </div>
              </div>
            </div>

                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  ,)}
