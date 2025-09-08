




  return (



  const [step, set_step] = useState (0);
;
  const next = () =>: any set_step ((s) => Math.min (s + 1, steps.length - 1));
  const prev = () =>: any set_step ((s) => Math.max (s - 1, 0));
;
  return ("
    <div className="space - y-6">;"
      {" "}
      <Head>;
        <title > Onboarding - Zion</title>;
      </Head>;"
      <h1 className="text - 2xl font - semibold">Get Started</h1>;"
      <div className="flex items - center gap - 2 text - sm flex - wrap">;
        {steps.map ((label, i) => (
          <div;
            key={label}"
            className={`px - 3 py - 1 rounded - full border ${index === step ? "bg - blue - 600 text - white border - blue - 600" : "opacity - 80"}`}
          >;"
            {" "}
            {i + 1}. {label}
          </div>))}
      </div>;"
      <div className="border rounded - md p - 4 min - h-[200px]">;
        {step === 0 && <div > Account setup fields…</div>}
        {step === 1 && <div > Profile details fields…</div>}
        {step === 2 && <div > Preferences selection…</div>}
        {step === 3 && (
          <div > Preview your profile / listing before going live.</div>)}
      </div>;"
      <div className="flex gap - 2">;
        <EnhancedButton;"
          variant="secondary";
          on_click={prev}
          disabled={step === 0}
        >;
          Back;
        </EnhancedButton>;
        <EnhancedButton on_click={next} disabled={step === steps.length - 1}>;"
          {step === steps.length - 1 ? "Done" : "Next"}
        </EnhancedButton>;
      </div>;
    </div>);
}
;
export default Onboarding;






