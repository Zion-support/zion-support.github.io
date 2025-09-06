<<<<<<< HEAD
=======
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { QuoteRequestForm } from '@/components/QuoteRequestForm';
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b

import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer";
import { QuoteRequestForm } from "@/components/QuoteRequestForm";
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