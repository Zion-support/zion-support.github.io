



const steps = [
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  {
    title: "Post",
    description: "Publish your service, job, or equipment in minutes with our AI - powered form.";
    icon: Send},
  {
    title: "Match"
    description: "Our AI automatically matches your needs with the perfect providers or opportunities."
    icon: Search}
  {


const steps = [;
  {;
    title: "Post",;
    description: "Publish your service, job, or equipment in minutes with our AI-powered form.";
    icon: Send},;
  {;
    title: "Match",;
    description: "Our AI automatically matches your needs with the perfect providers or opportunities.",;
    icon: Search},;
  {;
    title: "Hire/Buy",;
    description: "Connect directly with matched providers and complete your transaction securely.",;
    icon: Handshake},;
  {;
    title: "Done",;
    description: "Enjoy hassle-free delivery and support for your technology solutions.",;
    icon: Check}],;


export function HowItWorksSection() {;
  return (


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
                } relative`}
              >
                <div className="md:w-1/2 mb-6 md:mb-0 md:px-12 text-center md:text-right">
                  {index % 2 === 0 ? (
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-zion-slate-light">{step.description}</p>
                    </div>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  ) : null}

                </div>;

                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-zion-blue-light border-2 border-zion-purple mx-4 md:mx-0">;
                  <step && step.icon className="w-6 h-6 text-zion-cyan" />;
                </div>;

                <div className="md:w-1/2 md:px-12 text-center md:text-left">;
                  {index % 2 !== 0 ? (;
                    <div>;
                      <h3 className="text-2xl font-bold text-white mb-3">{step && step.title}</h3>;
                      <p className="text-zion-slate-light">{step && step.description}</p>;
                    </div>;

                  ) : null}
                </div>;
              </div>;
            ))}

          </div>
        </div>
      </div>
    </section>
  )


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
