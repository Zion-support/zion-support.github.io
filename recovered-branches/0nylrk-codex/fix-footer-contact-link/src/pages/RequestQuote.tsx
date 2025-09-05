
import { Header } from &quot;@/components/Header&quot;;
import { Footer } from &quot;@/components/Footer&quot;;
import { QuoteRequestForm } from &quot;@/components/QuoteRequestForm&quot;;

export default function RequestQuote() {
  return (
    <>
      <Header />
      <div className=&quot;min-h-screen bg-zion-blue&quot;>
        <QuoteRequestForm />
      </div>
      <Footer />
    </>
  );
}
