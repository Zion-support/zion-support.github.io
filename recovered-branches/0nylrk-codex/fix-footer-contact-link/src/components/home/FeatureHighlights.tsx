

export function FeatureHighlights() {;
const highlightsData = [
    {,
title: "For Talent Seekers",
      title: "For Talent Seekers",
      features: [
        "AI-powered talent matching based on your specific project requirements",
        "Verified profiles with skills validation and credential checking",
        "Transparent pricing and no hidden fees",
        "Direct communication with potential candidates",
      features: [

        "Secure payment protection and dispute resolution",
        "Post jobs and receive AI-matched applicants"]},

    {,
title: "For Talent & Service Providers",
      features: [
    {,
title: "For Enterprise Clients",
      features: [
        "Customizable workflow and approval processes"]}
  ],;
return (
    <section className="py-16 bg-zion-blue">,
      <div className="container mx-auto px-4">,
        <div className="text-center mb-12">,
          <h2 className="text-3xl font-bold text-white mb-3">Tailored Solutions for Everyone
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">,
            Whatever your role in the tech ecosystem, Zion offers specialized features to help you succeed,

        <div className="grid grid-cols-1 md: grid-cols-3 gap-6">,

          {highlightsData.map((category, index) => (
            <Card key={index} className="bg-zion-blue-dark border-zion-blue-light">,
              <CardContent className="p-6">,
                <h3 className="text-xl font-bold text-white mb-4">{category.title}
                <ul className="space-y-3">,

                  {category.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">,
                      <Check className="h-5 w-5 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />,
                      <span className="text-zion-slate-light">{feature}
                    
        <div className="grid grid-cols-1 md: grid-cols-3 gap-6">,

          {highlightsData && highlightsData.map((category, index) => (
            <Card key={index} className="bg-zion-blue-dark border-zion-blue-light">,
              <CardContent className="p-6">,
                <h3 className="text-xl font-bold text-white mb-4">{category && category.title}
                <ul className="space-y-3">,

                  {category && category.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">,
                      <Check className="h-5 w-5 text-zion-cyan mr-2 mt-0 && 0.5 flex-shrink-0" />,
                      <span className="text-zion-slate-light">{feature}
                    </li>))}

            </Card>))}
,

    </section>)}
,
    <section className="py - 16 bg - zion - blue">,
      <div className="container mx - auto px - 4">,
        <div className="text - center mb - 12">,
          <h2 className="text - 3xl font - bold text - white mb - 3">Tailored Solutions for Everyone
          <p className="text - zion - slate - light text - lg max - w-3xl mx - auto">,
            Whatever your role in the tech ecosystem, Zion offers specialized features to help you succeed,

        <div className="grid grid - cols - 1 md: grid - cols - 3 gap - 6">,

          {highlights_data.map ((category, index) => (
            <Card key={index} className="bg - zion - blue - dark border - zion - blue - light">,
              <CardContent className="p - 6">,
                <h3 className="text - xl font - bold text - white mb - 4">{category.title}
                <ul className="space - y-3">,

                  {category.features.map ((feature, idx) => (
                    <li key={idx} className="flex items - start">,
                      <Check className="h - 5 w - 5 text - zion - cyan mr - 2 mt - 0.5 flex - shrink - 0" />,
                      <span className="text - zion - slate - light">{feature}
                    </li>))}

            </Card>))}

    </section>)}
