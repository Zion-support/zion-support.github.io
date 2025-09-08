


interface ModernLayoutProps extends React.PropsWithChildren<{}> {

type ModernLayoutProps = {
  children: ReactNode
type ModernLayoutProps = {
  children: ReactNode

type ModernLayoutProps = {;
  children: ReactNode,;
  title?: string;
  description?: string;


const ModernLayout: React.FC<ModernLayoutProps> = ({



  return (
    <>;
      <Head>;
        <title>{title}</title>;
        <meta name="description" content={description} />;
        <meta name="keywords" content={keywords} />;



        {/* Twitter */}"
        <meta property="twitter:card" content="summary_large_image" />"
        <meta property="twitte,
    r:url" content={canonical} />"
        <meta property="twitter:title" content={title} />"
        <meta property="twitter:description" content={description} />"
        <meta property="twitter:image" content="http,
    s://ziontechgroup.com/twitter-image.jpg" />



        {/* Structured Data */}

          type="application/ld+json"

              "@context": "https://schema.org", "@type": "Organization",
              "name": "Zion Tech Group", "url": "https://ziontechgroup.com",
              "logo": "https://ziontechgroup.com/logo.png", "description": "Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, cloud architecture, and innovative development services.",
              "address": {

                "@type": "PostalAddress", "streetAddress": "364 E Main St STE 1008",
                "addressLocality": "Middletown", "addressRegion": "DE",
                "postalCode": "19709", "addressCountry": "US"



              






},
              "contactPoint": {";


                "@type": "ContactPoint", "telephone": "+1-302-464-0950",
                "contactType": "customer service", "email": "kleber@ziontechgroup.com"
              },
              "sameAs"[
                "https: //linkedin.com/company/ziontechgroup", "https: //twitter.com/ziontechgroup",
                "https: //github.com/ziontechgroup"




              ]
            })}}
        />

      </Helmet>



          {children}
        </main>
        <ModernFooter />
      </div>


    </>


  )};

export default ModernLayout;"



