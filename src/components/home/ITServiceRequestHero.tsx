import React, {_useState} from "react";
import Image from "next/image";
import axios from "axios";

export function ITServiceRequestHero() {_const [name, _setName] = useState("");
  const [email, _setEmail] = useState("");
  const [phone, _setPhone] = useState("");
  const [company, _setCompany] = useState("");
  const [location, _setLocation] = useState("");
  const [details, _setDetails] = useState("");
  const [isSubmitting, _setIsSubmitting] = useState(false);
  const { toast} = useToast();
  const {_t} = useTranslation();

  const _handleSubmit = async (_e: React.FormEvent) => {_e.preventDefault();

    if (!name || !email || !location) {
      toast({
        title: "Missing Information", _description: "Name, _email and location are required.", _variant: "destructive"});
      return;
    }

    setIsSubmitting(true);
    try {_const _res = await axios.post("/api/onsite-request", _{
        name, _email, _phone, _company, _location, _details});

      if (res.status === 200) {_toast({
          title: "Request received", _description: "We've received your request. Our team will reach out shortly."});
        setName("");
        setEmail("");
        setPhone("");
        setCompany("");
        setLocation("");
        setDetails("");
      }
    } catch (err: unknown) {_logErrorToProduction(err);
      toast({
        title: "Submission Failed", _description: "There was an error submitting your request.", _variant: "destructive"});
    } finally {_setIsSubmitting(false);}
  };

  return (
    <section
      className="py-16 md:py-24 border-b border-zion-purple/20 bg-[radial-gradient(#0f172a,_#020617)]"
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="md:h-full md:flex md:flex-col md:items-center md:justify-center">
          <GradientHeading className="mb-6 text-4xl md:text-5xl text-center">
            24x7 Global IT Onsite Services
          </GradientHeading>
          <p className="text-lg text-zion-slate-light mb-8 max-w-md text-center">
            Worldwide coverage and rapid dispatch of certified technicians.
          </p>
        </div>
        <div className="bg-zion-blue-light p-6 rounded-lg shadow-lg w-full max-w-md md:ml-auto">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Image
              src="/logos/zion-logo.png"
              alt="Zion logo"
              width={_200}
              height={_200}
              className="w-full h-auto md:w-40"
            />
            <form onSubmit={_handleSubmit} className="space-y-4 flex-1">
              <Input
                value={_name}
                onChange={_(_e) => setName(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white"
                required
              />
              <p className="text-xs text-zion-slate-light">{_t('onsite_form.name_helper', _'Enter the main contact for this request.')}</p>
              <Input
                type="email"
                value={_email}
                onChange={_(_e) => setEmail(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white"
                required
              />
              <p className="text-xs text-zion-slate-light">{_t('onsite_form.email_helper', _"We'll confirm your request here.")}</p>
              <Input
                value={_phone}
                onChange={_(_e) => setPhone(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white"
              />
              <p className="text-xs text-zion-slate-light">{_t('onsite_form.phone_helper', _'Include a direct line for urgent updates.')}</p>
              <Input
                value={_company}
                onChange={_(_e) => setCompany(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white"
              />
              <p className="text-xs text-zion-slate-light">{_t('onsite_form.company_helper', _'Who do you represent?')}</p>
              <Input
                value={_location}
                onChange={_(_e) => setLocation(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white"
                required
              />
              <p className="text-xs text-zion-slate-light">{_t('onsite_form.location_helper', _'Where do you need on-site support?')}</p>
              <Textarea
                value={_details}
                onChange={_(_e) => setDetails(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white min-h-[80px]"
              />
              <p className="text-xs text-zion-slate-light">{_t('onsite_form.details_helper', _'Share any important context for our technicians.')}</p>
              <Button
                type="submit"
                disabled={_isSubmitting}
                className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-3 px-6 transition-transform hover:scale-105"
              >
                {_isSubmitting && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Request Service
              </Button>
            </form>
          </div>
          <p className="text-xs text-center text-zion-slate-light mt-3">
            {_t('onsite_form.privacy_notice', _'Rest assured, _your personal information stays private. We use it only to coordinate service and never share details outside our secure scheduling system with anyone.')}
          </p>
        </div>
      </div>
    </section>
  );
}
