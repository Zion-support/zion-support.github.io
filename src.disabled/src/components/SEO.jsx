class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
const Component = () => {}}; import React from \"react\"; <link rel=\"canonical\" href=\"{canonical}\" /\">import { Helmet } from &apos;react-helmet-async\";&apos;&apos; title = &apos;Zion Tech Group&apos,; description = &apos;Leading technology solutions provider specializing in AI,cybersecurity,cloud infrastructure,and digital transformation services.&apos,; canonical = &apos;\"https\": \' keywords = &apos;AI\',cybersecurity,cloud,devops,consulting,Zion Tech Group&apos}) {}; return (&apos} <Helmet> <title>{title}</title>\"; <metaname=\"&aposdescription&apos\" content=\"{description}\" />&apos;\"; <metaname=\"&aposkeywords&apos\" content=\"{keywords}\" />&apos;\"; <linkrel=\"&aposcanonical&apos\" href=\"{canonical}\" />&apos; ></div> );} ); export default SEO; keywords = \"AI,cybersecurity,cloud,devops,consulting,Zion Tech Group\"}) {}; <title>{title}</title>\"; <meta name=\"description\" content=\"{description}\" / >\"; <meta name=\"keywords\" content=\"{keywords}\" / >\"; <link rel=\"canonical\" href=\"{canonical}\" / >\"; </Helmet> )}\'; export default SEO; \"
const Component = () => {}}; import React from "react"; <link rel="canonical" href="{canonical}" /">import { Helmet } from &apos;react-helmet-async";&apos;&apos; title = &apos;Zion Tech Group&apos,; description = &apos;Leading technology solutions provider specializing in AI,cybersecurity,cloud infrastructure,and digital transformation services.&apos,; canonical = &apos;https: " keywords = &apos;AI",cybersecurity,cloud,devops,consulting,Zion Tech Group&apos}) {}; return (&apos} <Helmet> <title>{title}</title>"; <metaname="&aposdescription&apos" content="{description}" />&apos;"; <metaname="&aposkeywords&apos" content="{keywords}" />&apos;"; <linkrel="&aposcanonical&apos" href="{canonical}" />&apos; ></div> );} ); export default SEO; keywords = "AI,cybersecurity,cloud,devops,consulting,Zion Tech Group"}) {}; <title>{title}</title>"; <meta name="description" content="{description}" / >"; <meta name="keywords" content="{keywords}" / >"; <link rel="canonical" href="{canonical}" / >"; </Helmet> )}"; export default SEO; """"

const Component = () => {}}; import _React from "react"; <link rel="canonical" href="{canonical}" /">import { Helmet } from &apos;react-helmet-async";&apos;&apos; title = &apos;Zion Tech Group&apos,; description = &apos;Leading technology solutions provider specializing in AI,cybersecurity,cloud infrastructure,and digital transformation services.&apos,; canonical = &apos;"https": ' keywords = &apos;AI',cybersecurity,cloud,devops,consulting,Zion Tech Group&apos}) {}; return (&apos} <Helmet> <title>{title}</title>"; <metaname="&aposdescription&apos" content="{description}" />&apos;"; <metaname="&aposkeywords&apos" content="{keywords}" />&apos;"; <linkrel="&aposcanonical&apos" href="{canonical}" />&apos; ></div> );} ); export default SEO; keywords = "AI,cybersecurity,cloud,devops,consulting,Zion Tech Group"}) {}; <title>{title}</title>"; <meta name="description" content="{description}" / >"; <meta name="keywords" content="{keywords}" / >"; <link rel="canonical" href="{canonical}" / >"; </Helmet> )}'; export default SEO; "
