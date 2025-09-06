        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="p-8 bg-slate-900/60 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold mb-4 text-blue-400">{faq.question}</h3>
                  <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>
          </div>
        </section>
        {/* Contact CTA */}
        {/* Contact CTA */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-16 px-4 bg-slate-900/40">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Still Have Questions?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Our team is here to help. Contact us for personalized answers to
              your specific questions and to discuss how we can help your
              business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
