

import { Header } from "@/components/Header",

export default function RequestQuote() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-zion-blue">
        <QuoteRequestForm />
      </div>
      <Footer />
    </>
  )

}
;
