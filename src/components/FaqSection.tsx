import React, { useState } from 'react';'
const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
</number>'
    <section className="py-16 px-4 bg-gray-50">"
</section>"
      <div className="container mx-auto max-w-4xl">"
</div>"
        <h2 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>""
        <p className="text-xl text-gray-600 text-center mb-12">"
</p>
        </p>"
        <div className="space-y-4">"
</div>"
            <div key={index} className="bg-white rounded-lg shadow-md">"
</div>
              <button;"
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500""
                onClick={() => toggleFaq(index)}
</button>"
                <span className="text-lg font-semibold">{faq.question}</span>"
                <svg;
                  className={`w-5 h-5 transform transition-transform ${"
                    openIndex === index ? 'rotate-180' : '''
                  }`}'
                  fill="none"""
                  stroke="currentColor"""
                  viewBox="0 0 24 24""
                >
</svg>"
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />"
</path>
                </svg>
              </button>"
                <div className="px-6 pb-4">"
</div>"
                  <p className="text-gray-600">{faq.answer}</p>"
                </div>
            </div>
        </div>
      </div>
    </section>"
    <section className='py-20 bg-zion-blue' id='faq'>;'
</section>'
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>;'
</div>'
        <div className='text-center mb-12'>;'
</div>
          <GradientHeading>Frequently Asked Questions</GradientHeading>;'
          <p className='mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto'>;'
</p>'
    <section className='py - 20 bg - zion - blue' id='faq'>;'
</section>'
      <div className='container mx - auto px - 4 sm:px - 6 lg:px - 8'>;'
</div>'
        <div className='text - center mb - 12'>;'
</div>
          <GradientHeading > Frequently Asked Questions</GradientHeading>;'
          <p className='mt - 4 text - zion - slate - light text - xl max - w-2xl mx - auto'>;'
</p>
          </p>;
        </div>;'
        <div className='max - w-3xl mx - auto bg - zion - blue - light rounded - lg border border - zion - purple / 20 p - 6'>;'
</div>'
          <div className='flex items - center mb - 6'>;'
</div>'
            <FileText className='h - 6 w - 6 text - zion - cyan mr - 2' />;'
</FileText>'
            <h3 className='text - xl font - bold text - white'>Common Questions</h3>;'
          </div>;'
          <Accordion type='single' collapsible className='w - full'>;'
</Accordion>
              <AccordionItem;
                key={index}
                value={`item-${index}`}'
                className='border - zion - purple / 10';'
              >;
</AccordionItem>'
                <AccordionTrigger className='text - white hover:text - zion - cyan'>                  {faq.question}'
</AccordionTrigger>
                </AccordionTrigger>;'
                <AccordionContent className='text - zion - slate - light'>                  {faq.answer}'
</AccordionContent>'
                <AccordionContent className="text - zion - slate - light">;"
</AccordionContent>"
        <div className='max-w-3xl mx-auto bg-zion-blue-light rounded-lg border border-zion-purple/20 p-6'>;'
</div>'
          <div className='flex items-center mb-6'>;'
</div>'
            <FileText className='h-6 w-6 text-zion-cyan mr-2' />;'
</FileText>'
            <h3 className='text-xl font-bold text-white'>Common Questions</h3>;'
          </div>;'
          <Accordion type='single' collapsible className='w-full'>;'
</Accordion>
              <AccordionItem;
                key={index}
                value={`item-${index}`}'
                className='border-zion-purple/10'>;'
</AccordionItem>'
                <AccordionTrigger className='text-white hover:text-zion-cyan'>                  {faq && faq.question}'
</AccordionTrigger>
                </AccordionTrigger>;'
                <AccordionContent className='text-zion-slate-light'>                  {faq && faq.answer}'
</AccordionContent>'
                <AccordionContent className="text-zion-slate-light">;"
</AccordionContent>"
        <div className="max-w-3xl mx-auto bg-zion-blue-light rounded-lg border border-zion-purple/20 p-6">"
</div>"
          <div className="flex items-center mb-6">"
</div>"
            <FileText className="h-6 w-6 text-zion-cyan mr-2" />"
</FileText>"
            <h3 className="text-xl font-bold text-white">Common Questions</h3>"
          </div>


          

"
          <Accordion type="single" collapsible className="w-full">"
</Accordion>"
              <AccordionItem key={index} value={`item-${index}`} className="border-zion-purple/10">"
</AccordionItem>"
                <AccordionTrigger className="text-white hover:text-zion-cyan">"
</AccordionTrigger>"
    <section className="py - 20 bg - zion - blue" id="faq">;"
</section>"
      <div className="container mx - auto px - 4 sm:px - 6 lg:px - 8">;"
</div>"
        <div className="text - center mb - 12">;"
</div>
          <GradientHeading > Frequently Asked Questions</GradientHeading>;"
          <p className="mt - 4 text - zion - slate - light text - xl max - w-2xl mx - auto">;"
</p>
          </p>;
        </div>;"
        <div className="max - w-3xl mx - auto bg - zion - blue - light rounded - lg border border - zion - purple / 20 p - 6">;"
</div>"
          <div className="flex items - center mb - 6">;"
</div>"
            <FileText className="h - 6 w - 6 text - zion - cyan mr - 2" />;"
</FileText>"
            <h3 className="text - xl font - bold text - white">Common Questions</h3>;"
          </div>;"
          <Accordion type="single" collapsible className="w - full">;"
</Accordion>"
              <AccordionItem key={index} value={`item-${index}`} className="border - zion - purple / 10">;"
</AccordionItem>"
                <AccordionTrigger className="text - white hover:text - zion - cyan">;"
</AccordionTrigger>
                </AccordionTrigger>"
                <AccordionContent className="text-zion-slate-light">"
</AccordionContent>"
    <section className="py-20 bg-zion-blue" id="faq">;"
</section>"
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">;"
</div>"
        <div className="text-center mb-12">;"
</div>
          <GradientHeading>Frequently Asked Questions</GradientHeading>;"
          <p className="mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto">;"
</p>
          </p>;
        </div>;"
        <div className="max-w-3xl mx-auto bg-zion-blue-light rounded-lg border border-zion-purple/20 p-6">;"
</div>"
          <div className="flex items-center mb-6">;"
</div>"
            <FileText className="h-6 w-6 text-zion-cyan mr-2" />;"
</FileText>"
            <h3 className="text-xl font-bold text-white">Common Questions</h3>;"
          </div>;"
          <Accordion type="single" collapsible className="w-full">;"
</Accordion>"
              <AccordionItem key={index} value={`item-${index}`} className="border-zion-purple/10">;"
</AccordionItem>"
                <AccordionTrigger className="text-white hover:text-zion-cyan">;"
</AccordionTrigger>
                </AccordionContent>;
              </AccordionItem>))}
          </Accordion>;
        </div>;
      </div>;
    </section>);"