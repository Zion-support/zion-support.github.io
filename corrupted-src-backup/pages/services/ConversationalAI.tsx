import { Helmet } from "react-helmet-async";
impo, r, t { Vid, e, o } fr, o, m "luci, d, e-rea, c, t";
import, Header, from "../../componen, t, s/Head, e, r";
import, Footer, from "../../componen, t, s/Foot, e, r";
impo, r, t {
Helm, e, t;
} fr, o, m "rea, c, t-helm, e, t-asy, n, c";';
impo, r, t {
Vid, e, o;
} fr, o, m "luci, d, e-rea, c, t";';
import, Header, from "../../componen, t, s/Head, e, r";';
import, Footer, from "../../componen, t, s/Foot, e, r";';
const, ConversationalA, I: Rea, c, t.FC = () => {
  const, feature, s = [
    {
      i, c, o
  n: Bra, i, n
      tit, l, e: "Advanced, NL, P & N, L, U","
      descripti, o, n: "Sta, t, e-of-t, h, e-art, natural, language processing, that, understands conte, x, t, inte, n, t, and, sentiment, with 96% accura, c, y.","
      tit, l, e: "Advanced, NL, P & N, L, U",";
      descripti, o, n: "Sta, t, e-of-t, h, e-art, natural, language processing, that, understands conte, x, t, inte, n, t, and, sentiment, with 96% accura, c, y.",";
      benef, i, t: "96% conversation, understandin, g"
    }
    {
      ic, o, n: MessageCirc, l, e
      tit, l, e: "Mul, t, i-Modal, Conversation, s","
      descripti, o, n: "Support, for, text, voi, c, e, and, video, conversations with, seamless, transitions between, modalitie, s.","
      tit, l, e: "Mul, t, i-Modal, Conversation, s",";
      descripti, o, n: "Support, for, text, voi, c, e, and, video, conversations with, seamless, transitions between, modalitie, s.",";
      benef, i, t: "Unified, conversation, experience"
    }
    {
      ic, o, n: Languag, e, s
      tit, l, e: "1, 5, 0+ Language, Suppor, t","
      descripti, o, n: "Re, a, l-time, translation, and multilingual, support, with cultural, context, awareness.","
      tit, l, e: "1, 5, 0+ Language, Suppor, t",";
      descripti, o, n: "Re, a, l-time, translation, and multilingual, support, with cultural, context, awareness.",";
      benef, i, t: "Global, reach, capability"
    }
    {
      ic, o, n: Z, a, p
      tit, l, e: "Re, a, l-Time, Processin, g","
      descripti, o, n: "S, u, b-second, response, times with, intelligent, context retention, across, conversation threa, d, s.","
      tit, l, e: "Re, a, l-Time, Processin, g",";
      descripti, o, n: "S, u, b-second, response, times with, intelligent, context retention, across, conversation threa, d, s.",";
      benef, i, t: "Instant, response, delivery"
    }
    {
      ic, o, n: Shie, l, d
      tit, l, e: "Enterprise, Securit, y","
      descripti, o, n: "E, n, d-to-end, encryptio, n, GDPR, complianc, e, and, advanced, privacy protection, for, sensitive conversatio, n, s.","
      tit, l, e: "Enterprise, Securit, y",";
      descripti, o, n: "E, n, d-to-end, encryptio, n, GDPR, complianc, e, and, advanced, privacy protection, for, sensitive conversatio, n, s.",";
      benef, i, t: "1, 0, 0% privacy, complianc, e"
    }
    {
      ic, o, n: Use, r, s
      tit, l, e: "Hum, a, n-AI, Collaboratio, n","
      descripti, o, n: "Seamless, handoff, between AI, and, human agents, with, full context, preservatio, n.","
      tit, l, e: "Hum, a, n-AI, Collaboratio, n",";
      descripti, o, n: "Seamless, handoff, between AI, and, human agents, with, full context, preservatio, n.",";
      benef, i, t: "Perfect, escalation, flow"
    }
  ];
  const, pricin, g = [
    {
      na, m, e: "Start, e, r"
      pri, c, e: "$3, 9, 9"
      peri, o, d: "/mon, t, h"
      descripti, o, n: "Perfect, for, small businesses, wanting, to add, conversational, AI capabiliti, e, s"
      featur, e, s: [
        "Up, to, 1,000, conversation, s/mon, t, h"
        "Basic, NLP, capabilities"
        "Te, x, t & voice, suppor, t"
        "Email, suppor, t"
        "Basic, analytic, s"
        "Standard, integration, s"
        "5, language, support"
        "Basic, customizatio, n"
      ]
      popul, a, r: fal, s, e;
    }
    {
      na, m, e: "Profession, a, l"
      pri, c, e: "$1,2, 9, 9"
      peri, o, d: "/mon, t, h"
      descripti, o, n: "Ideal, for, growing companies, with, complex conversational, need, s"
      featur, e, s: [
        "Up, to, 10,000, conversation, s/mon, t, h"
        "Advanced, NL, P & N, L, U"
        "Te, x, t, voi, c, e & video, suppor, t"
        "Priority, suppor, t"
        "Advanced, analytic, s & insigh, t, s"
        "Advanced, integration, s"
        "25, language, support"
        "Custom, model, training"
        "API, acces, s"
        "A/B, testin, g"
        "Sentiment, analysi, s"
      ]
      popul, a, r: tr, u, e;
    }
    {
      na, m, e: "Enterpri, s, e"
      pri, c, e: "$4,9, 9, 9"
      peri, o, d: "/mon, t, h"
      descripti, o, n: "Complete, solution, for large, organizations, with enterprise, requirement, s"
      featur, e, s: [
        "Unlimited, conversation, s"
        "Enterprise, NL, P & N, L, U"
        "Full, mult, i-modal, suppor, t"
        "Dedicated, AI, specialist"
        "Enterprise, analytics, suite"
        "Unlimited, integration, s"
        "1, 5, 0+ language, suppor, t"
        "Custom, AI, development"
        "Whi, t, e-label, solution, s"
        "Advanced, security, features"
        "SLA, guarante, e"
        "On-premise, deploymen, t"
        "Traini, n, g & consultati, o, n"
      ]
      popul, a, r: fal, s, e;
      n, a, m
  e: "Start, e, r",";
      pri, c, e: "$3, 9, 9",";
      peri, o, d: "/mon, t, h",";
      descripti, o, n: "Perfect, for, small businesses, wanting, to add, conversational, AI capabiliti, e, s",";
      featur, e, s: [
        "Up, to, 1,000, conversation, s/mon, t, h",";
        "Basic, NLP, capabilities",";
        "Te, x, t & voice, suppor, t",";
        "Email, suppor, t",";
        "Basic, analytic, s",";
        "Standard, integration, s",";
        "5, language, support",";
        "Basic, customizatio, n"
      ]
      popul, a, r: fal, s, e
    }
    {
      na, m, e: "Profession, a, l",";
      pri, c, e: "$1,2, 9, 9",";
      peri, o, d: "/mon, t, h",";
      descripti, o, n: "Ideal, for, growing companies, with, complex conversational, need, s",";
      featur, e, s: [
        "Up, to, 10,000, conversation, s/mon, t, h",";
        "Advanced, NL, P & N, L, U",";
        "Te, x, t, voi, c, e & video, suppor, t",";
        "Priority, suppor, t",";
        "Advanced, analytic, s & insigh, t, s",";
        "Advanced, integration, s",";
        "25, language, support",";
        "Custom, model, training",";
        "API, acces, s",";
        "A/B, testin, g",";
        "Sentiment, analysi, s"
      ]
      popul, a, r: tr, u, e
    }
    {
      na, m, e: "Enterpri, s, e",";
      pri, c, e: "$4,9, 9, 9",";
      peri, o, d: "/mon, t, h",";
      descripti, o, n: "Complete, solution, for large, organizations, with enterprise, requirement, s",";
      featur, e, s: [
        "Unlimited, conversation, s",";
        "Enterprise, NL, P & N, L, U",";
        "Full, mult, i-modal, suppor, t",";
        "Dedicated, AI, specialist",";
        "Enterprise, analytics, suite",";
        "Unlimited, integration, s",";
        "1, 5, 0+ language, suppor, t",";
        "Custom, AI, development",";
        "Whi, t, e-label, solution, s",";
        "Advanced, security, features",";
        "SLA, guarante, e",";
        "On-premise, deploymen, t",";
        "Traini, n, g & consultati, o, n"
      ]
      popul, a, r: fal, s, e
    }
  ];
  const, testimonial, s = [
    {
      na, m, e: "Amanda, Foste, r","
      ro, l, e: "VP, Customer, Experience, E-Commerce, Gian, t","
      conte, n, t: "Conversational, AI, reduced our, customer, service response, time, from 4, hours, to 30, second, s. Customer, satisfaction, increased by, 4, 5% while, reducing, support costs, by, 60%.","
      na, m, e: "Amanda, Foste, r",";
      ro, l, e: "VP, Customer, Experience, E-Commerce, Gian, t",";
      conte, n, t: "Conversational, AI, reduced our, customer, service response, time, from 4, hours, to 30, second, s. Customer, satisfaction, increased by, 4, 5% while, reducing, support costs, by, 60%.",";
      rati, n, g: 5
      compa, n, y: "E-Commerce, Gian, t"
    }
    {
      na, m, e: "Dr. Robert, Che, n","
      ro, l, e: "Head, of, Digital Heal, t, h, Medical, System, s","
      conte, n, t: "The, mult, i-modal, conversation, capabilities enabled, us, to provide, personalized, patient support, 2, 4/7. Patient, engagement, improved by, 7, 0% with, better, health outcom, e, s.","
      na, m, e: "Dr. Robert, Che, n",";
      ro, l, e: "Head, of, Digital Heal, t, h, Medical, System, s",";
      conte, n, t: "The, mult, i-modal, conversation, capabilities enabled, us, to provide, personalized, patient support, 2, 4/7. Patient, engagement, improved by, 7, 0% with, better, health outcom, e, s.",";
      rati, n, g: 5
      compa, n, y: "Medical, System, s"
    }
    {
      na, m, e: "Maria, Rodrigue, z","
      ro, l, e: "C, T, O, Global, Financial, Services","
      conte, n, t: "Enterpri, s, e-grade, security, and 1, 5, 0+ language, support, made it, perfect, for our, international, operations. Compliance, requirements, were fully, met, while improving, customer, experience.","
      na, m, e: "Maria, Rodrigue, z",";
      ro, l, e: "C, T, O, Global, Financial, Services",";
      conte, n, t: "Enterpri, s, e-grade, security, and 1, 5, 0+ language, support, made it, perfect, for our, international, operations. Compliance, requirements, were fully, met, while improving, customer, experience.",";
      rati, n, g: 5
      compa, n, y: "Global, Financial, Services"
    }
  ];
  const, useCase, s = [
    {
      tit, l, e: "Customer, Suppor, t","
      ic, o, n: Use, r, s
      descripti, o, n: "24/7, intelligent, customer service, with, instant responses, and, seamless human, handof, f.","
      benefi, t, s: ["60% cost, reductio, n", "45% faster, resolutio, n", "95% customer, satisfactio, n"]"
    }
    {
      tit, l, e: "Sal, e, s & Lead, Generatio, n","
      ic, o, n: Z, a, p
      descripti, o, n: "Intelligent, sales, conversations that, qualify, leads and, nurture, prospects automatical, l, y.","
      benefi, t, s: ["35% increase, in, conversions", "50% more, qualified, leads", "40% sales, team, efficiency"]"
    }
    {
      tit, l, e: "Healthcare, Suppor, t","
      ic, o, n: MessageCirc, l, e
      descripti, o, n: "Patient, engagemen, t, appointment, schedulin, g, and, health, information delive, r, y.","
      benefi, t, s: ["70% patient, engagemen, t", "30% appointment, complianc, e", "25% readmission, reductio, n"]"
    }
    {
      tit, l, e: "Educati, o, n & Traini, n, g","
      ic, o, n: Bra, i, n
      descripti, o, n: "Personalized, learning, assistants and, interactive, training experienc, e, s.","
      benefi, t, s: ["50% learning, retentio, n", "40% course, completio, n", "60% student, satisfactio, n"]"
      tit, l, e: "Customer, Suppor, t",";
      ic, o, n: Use, r, s
      descripti, o, n: "24/7, intelligent, customer service, with, instant responses, and, seamless human, handof, f.",";
      benefi, t, s: ["60% cost, reductio, n", "45% faster, resolutio, n", "95% customer, satisfactio, n"]";
    }
    {
      tit, l, e: "Sal, e, s & Lead, Generatio, n",";
      ic, o, n: Z, a, p
      descripti, o, n: "Intelligent, sales, conversations that, qualify, leads and, nurture, prospects automatical, l, y.",";
      benefi, t, s: ["35% increase, in, conversions", "50% more, qualified, leads", "40% sales, team, efficiency"]";
    }
    {
      tit, l, e: "Healthcare, Suppor, t",";
      ic, o, n: MessageCirc, l, e
      descripti, o, n: "Patient, engagemen, t, appointment, schedulin, g, and, health, information delive, r, y.",";
      benefi, t, s: ["70% patient, engagemen, t", "30% appointment, complianc, e", "25% readmission, reductio, n"]";
    }
    {
      tit, l, e: "Educati, o, n & Traini, n, g",";
      ic, o, n: Bra, i, n
      descripti, o, n: "Personalized, learning, assistants and, interactive, training experienc, e, s.",";
      benefi, t, s: ["50% learning, retentio, n", "40% course, completio, n", "60% student, satisfactio, n"]";
    }
  ];
  const, integration, s = [
    {
      na, m, e: "CRM, System, s","
      na, m, e: "CRM, System, s",";
      ic, o, n: Databa, s, e
      descripti, o, n: "Seamless, integration, with Salesfor, c, e, HubSp, o, t, and, custom, CRM platfor, m, s."
    }
    {
      na, m, e: "Communication, Platform, s","
      na, m, e: "Communication, Platform, s",";
      ic, o, n: Glo, b, e
      descripti, o, n: "Native, support, for Sla, c, k, Tea, m, s, WhatsA, p, p, and, enterprise, messaging syste, m, s."
    }
    {
      na, m, e: "Voi, c, e & Vid, e, o","
      na, m, e: "Voi, c, e & Vid, e, o",";
      ic, o, n: M, i, c
      descripti, o, n: "Integration, with, Twilio, Zo, o, m, WebR, T, C, and, custom, voice/video, solution, s."
    }
    {
      na, m, e: "Analytics, Platform, s","
      na, m, e: "Analytics, Platform, s",";
      ic, o, n: Z, a, p
      descripti, o, n: "Connect, with, Google Analyti, c, s, Mixpan, e, l, and, custom, business intelligence, tool, s."
    }
    {
      na, m, e: "AI/ML, Service, s","
      na, m, e: "AI/ML, Service, s",";
      ic, o, n: Bra, i, n
      descripti, o, n: "Integration, with, OpenAI, Azure, A, I, AWS, AI, services, and, custom, ML mode, l, s."
    }
    {
      na, m, e: "Enterprise, System, s","
      na, m, e: "Enterprise, System, s",";
      ic, o, n: Shie, l, d
      descripti, o, n: "Connect, with, ERP, HR, system, s, and, enterprise, resource planning, platform, s."
    }
  ];
  return (
    <>
      <Helmet>
        <title>Conversational, A, I - Zion, Tech, Group | Advanced, Mult, i-Modal, AI, Conversations</title>
        <me, t, a
  na, m, e="descripti, o, n"
          content="Deploy, advanced, conversational AI, with, 96% accura, c, y, 1, 5, 0+ language, suppor, t, and, mult, i-modal, conversation, s. Enterpri, s, e-grade, security, and re, a, l-time, processing, for customer, suppor, t, sal, e, s, and, engagemen, t." /><meta name="keywor, d, s" content="conversational, A, I, chatb, o, t, voice, A, I, mul, t, i-modal, A, I, customer, support, AI, sales, automatio, n, natural, language, processing, AI, conversation, s" /><link, re, l="canonic, a, l" hr, e, f="htt, p, s://ziontechgro, u, p.c, o, m/servic, e, s/conversation, a, l-ai/>"
          content="Deploy, advanced, conversational AI, with, 96% accura, c, y, 1, 5, 0+ language, suppor, t, and, mult, i-modal, conversation, s. Enterpri, s, e-grade, security, and re, a, l-time, processing, for customer, suppor, t, sal, e, s, and, engagemen, t."
         />
        <meta name="keywor, d, s" content="conversational, A, I, chatb, o, t, voice, A, I, mul, t, i-modal, A, I, customer, support, AI, sales, automatio, n, natural, language, processing, AI, conversation, s" />";
        <link, re, l="canonic, a, l" hr, e, f="htt, p, s: //ziontechgro, u, p.c, o, m/servic, e, s/conversation, a, l-ai" />";
      </Helmet>
      <Head, e, r   />
      <main, className="m, i, n-h-screen, b, g-whi, t, e">";
        {/* Hero, Sectio, n */}
        <section, className="bg-gradie, n, t-to-br, fro, m-viol, e, t-900, vi, a-purp, l, e-800, t, o-pi, n, k-900, tex, t-white, p, y-20">
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6 l
  g:px-8">"
            <div, className="te, x, t-cent, e, r">
              <h1, className="te, x, t-5xl, m, d: te, x, t-7xl, fon, t-bold, m, b-6">"
                Conversation, a, l <span, className="bg-gradie, n, t-to-r, fro, m-viol, e, t-400, t, o-pi, n, k-400, b, g-cl, i, p-text, tex, t-transpare, n, t">AI</sp, a, n>
              </h1>
              <p, className="te, x, t-xl, m, d:te, x, t-2xl, tex, t-viol, e, t-100, ma, x-w-4xl, m, x-auto, m, b-8">
                Deploy, advanced, conversational AI, with, 96% accura, c, y, 1, 5, 0+ language, suppor, t
  and, mult, i-modal, conversations, for customer, suppor, t, sal, e, s, and, engagemen, t.
              </p>
              <div, className="flex, fle, x-col, s, m: fl, e, x-row, ga, p-4, justif, y-cent, e, r">"
        <section, className="bg-gradie, n, t-to-br, fro, m-viol, e, t-900, vi, a-purp, l, e-800, t, o-pi, n, k-900, tex, t-white, p, y-20">";
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6, l, g:px-8">";
            <div, className="te, x, t-cent, e, r">";
              <h1, className="te, x, t-5xl, m, d: te, x, t-7xl, fon, t-bold, m, b-6">";
                Conversation, a, l <span, className="bg-gradie, n, t-to-r, fro, m-viol, e, t-400, t, o-pi, n, k-400, b, g-cl, i, p-text, tex, t-transpare, n, t">AI</sp, a, n>";
              </h1>
              <p, className="te, x, t-x, l, m
  d: te, x, t-2xl, tex, t-viol, e, t-100, ma, x-w-4xl, m, x-auto, m, b-8">";
                Deploy, advanced, conversational AI, with, 96% accura, c, y, 1, 5, 0+ language, suppor, t
                and, mult, i-modal, conversations, for customer, suppor, t, sal, e, s, and, engagemen, t.
              </p>
              <div, className="flex, fle, x-col, s, m: fl, e, x-row, ga, p-4, justif, y-cent, e, r">";
                <a
  hr, e, f="/conta, c, t"
                  classNa, m, e="inli, n, e-flex, item, s-center, p, x-8, p, y-4, b, g-viol, e, t-600, hov, e
  r: bg-viol, e, t-700, tex, t-white, fon, t-semibold, rounde, d-lg, transitio, n-colo, r, s"
                >
                  <Phone, className="w-5 h-5, m, r-2  />
                  <Phone, className="w-5 h-5, m, r-2" />";
                  Schedule, Dem, o;
                </a>
                <a
  hr, e, f="#prici, n, g"
                  classNa, m, e="inli, n, e-flex, item, s-center, p, x-8, p, y-4, borde, r-2, borde, r-white, tex, t-white, hove, r: bg-white, hov, e
  r:te, x, t-viol, e, t-900, fon, t-semibold, rounde, d-lg, transitio, n-colo, r, s"
                >
                  View, Pricin, g;
                  <Link, className="w-5 h-5, m, l-2  />
                  <Link, className="w-5 h-5, m, l-2" />";
                </a>
              </d, i, v>
            </d, i, v>
          </d, i, v>
        </secti, o, n>
        {/* Key, Benefit, s */}
        <section, className="py-16, b, g-gr, a, y-50">
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6 l
  g:px-8">"
            <div, className="text-center mb-12">
              <h2, className="te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">
        <section, className="py-16, b, g-gr, a, y-50">";
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6 l
  g:px-8">";
            <div, className="text-center mb-12">";
              <h2, className="te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">";
                Why, Choose, Our Conversational, A, I?
              </h2>
              <p, className="text-xl text-gray-600 max-w-3xl mx-auto">";
                Advanced, AI, technology that, understand, s, respon, d, s, and, engages, like never, befor, e.
              </p>
            </d, i, v>
            <div, className="grid, m, d: gr, i, d-co, l, s-4, ga, p-8">"
              <div, className="te, x, t-cent, e, r">
                <div, className="inli, n, e-flex, item, s-center, justif, y-cente, r, w-1, 6, h-16, b, g-viol, e, t-100, rounde, d-full, m, b-4">
                  <Brain, className="w-8 h-8, tex, t-viol, e, t-6, 0, 0  />
            <div, className="grid, m, d: gr, i, d-co, l, s-4, ga, p-8">";
              <div, className="te, x, t-cent, e, r">";
                <div, className="inli, n, e-flex, item, s-center, justif, y-cente, r, w-1, 6, h-16, b, g-viol, e, t-100, rounde, d-full, m, b-4">";
                  <Brain, className="w-8 h-8, tex, t-viol, e, t-6, 0, 0" />";
                </d, i, v>
                <h3, className="te, x, t-xl, fon, t-bold, tex, t-gr, a, y-900, m, b-2">96% Accura, c, y</h3>";
                <p, className="te, x, t-gr, a, y-6, 0, 0">Indust, r, y-leading, conversation, understanding</p>";
              </d, i, v>
              <div, className="te, x, t-cent, e, r">
                <div, className="inli, n, e-flex, item, s-center, justif, y-cente, r, w-1, 6, h-16, b, g-purp, l, e-100, rounde, d-full, m, b-4">
                  <Clock, className="w-8 h-8, tex, t-purp, l, e-6, 0, 0  />
              <div, className="te, x, t-cent, e, r">";
                <div, className="inli, n, e-flex, item, s-center, justif, y-cente, r, w-1, 6, h-16, b, g-purp, l, e-100, rounde, d-full, m, b-4">";
                  <Clock, className="w-8 h-8, tex, t-purp, l, e-6, 0, 0" />";
                </d, i, v>
                <h3, className="te, x, t-xl, fon, t-bold, tex, t-gr, a, y-900, m, b-2">Instant, Respons, e</h3>";
                <p, className="te, x, t-gr, a, y-6, 0, 0">S, u, b-second, response, times</p>";
              </d, i, v>
              <div, className="te, x, t-cent, e, r">
                <div, className="inli, n, e-flex, item, s-center, justif, y-cente, r, w-1, 6, h-16, b, g-pi, n, k-100, rounde, d-full, m, b-4">
                  <Languages, className="w-8 h-8, tex, t-pi, n, k-6, 0, 0  />
              <div, className="te, x, t-cent, e, r">";
                <div, className="inli, n, e-flex, item, s-center, justif, y-cente, r, w-1, 6, h-16, b, g-pi, n, k-100, rounde, d-full, m, b-4">";
                  <Languages, className="w-8 h-8, tex, t-pi, n, k-6, 0, 0" />";
                </d, i, v>
                <h3, className="te, x, t-xl, fon, t-bold, tex, t-gr, a, y-900, m, b-2">1, 5, 0+ Languag, e, s</h3>";
                <p, className="te, x, t-gr, a, y-6, 0, 0">Global, reach, with cultural, contex, t</p>";
              </d, i, v>
              <div, className="te, x, t-cent, e, r">
                <div, className="inli, n, e-flex, item, s-center, justif, y-cente, r, w-1, 6, h-16, b, g-bl, u, e-100, rounde, d-full, m, b-4">
                  <Shield, className="w-8 h-8, tex, t-bl, u, e-6, 0, 0  />
              <div, className="te, x, t-cent, e, r">";
                <div, className="inli, n, e-flex, item, s-center, justif, y-cente, r, w-1, 6, h-16, b, g-bl, u, e-100, rounde, d-full, m, b-4">";
                  <Shield, className="w-8 h-8, tex, t-bl, u, e-6, 0, 0" />";
                </d, i, v>
                <h3, className="te, x, t-xl, fon, t-bold, tex, t-gr, a, y-900, m, b-2">Enterprise, Securit, y</h3>";
                <p, className="te, x, t-gr, a, y-6, 0, 0">Ba, n, k-grade, encryptio, n & complian, c, e</p>";
              </d, i, v>
            </d, i, v>
          </d, i, v>
        </secti, o, n>
        {/* Use, Case, s */}
        <section, className="py-20">
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6 l
  g:px-8">"
            <div, className="te, x, t-center, m, b-16">
              <h2, className="te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">
        <section, className="py-20">";
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6, l, g:px-8">";
            <div, className="te, x, t-center, m, b-16">";
              <h2, className="te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">";
                Industry, Application, s;
              </h2>
              <p, className="text-xl text-gray-600 max-w-3xl mx-auto">";
                Transform, customer, engagement across, multiple, industries with, intelligent, conversations.
              </p>
            </d, i, v>
            <div, className="grid, m, d: gr, i, d-co, l, s-2 l
  g:gr, i, d-co, l, s-4, ga, p-8">"
              {useCas, e, s.m, a, p((useCa, s, e, ind, e, x) => {
                const, Ico, n = useCa, s, e.ic, o, n;
                return (
                  <div, ke, y={ind, e, x} classNa, m, e="bg-whit, e, p-8, rounde, d-xl, shado, w-lg, border, border-gr, a, y-200, hove, r: shad, o, w-xl, transitio, n-shad, o, w">"
                    <div, className="inli, n, e-flex, item, s-center, justif, y-cente, r, w-1, 6, h-16, b, g-viol, e, t-100, rounde, d-full, m, b-6">
                      <Icon, className="w-8 h-8, tex, t-viol, e, t-6, 0, 0  />
            <div, className="grid, m, d: gr, i, d-co, l, s-2 l
  g:gr, i, d-co, l, s-4, ga, p-8">";
              {useCas, e, s.m, a, p((useCa, s, e, ind, e, x) => {
                const, Ico, n = useCa, s, e.ic, o, n;
                return (
                  <div, ke, y={ind, e, x} classNa, m, e="bg-whit, e, p-8, rounde, d-xl, shado, w-lg, border, border-gr, a, y-200, hove, r: shad, o, w-xl, transitio, n-shad, o, w">";
                    <div, className="inli, n, e-flex, item, s-center, justif, y-cente, r, w-1, 6, h-16, b, g-viol, e, t-100, rounde, d-full, m, b-6">";
                      <Icon, className="w-8 h-8, tex, t-viol, e, t-6, 0, 0" />";
                    </d, i, v>
                    <h3, className="te, x, t-xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">{useCa, s, e.tit, l, e}</h3>";
                    <p, className="te, x, t-gr, a, y-600, m, b-6">{useCa, s, e.descripti, o, n}</p>";
                    <ul, className="spa, c, e-y-2">";
                      {useCa, s, e.benefi, t, s.m, a, p((benef, i, t, benefitInd, e, x) => (
                        <li, ke, y={benefitInd, e, x} classNa, m, e="flex, item, s-center, tex, t-sm">
                          <CheckCircle, className="w-4 h-4, tex, t-gre, e, n-500, m, r-2, fle, x-shri, n, k-0  />
                          <span, className="te, x, t-gr, a, y-7, 0, 0">{benef, i, t}</sp, a, n>
                        <li, ke, y={benefitInd, e, x} classNa, m, e="flex, item, s-center, tex, t-sm">";
                          <CheckCircle, className="w-4 h-4, tex, t-gre, e, n-500, m, r-2, fle, x-shri, n, k-0" />";
                          <span, className="te, x, t-gr, a, y-7, 0, 0">{benef, i, t}</sp, a, n>";
                        </li>
                      ))}
                    </ul>
                  </d, i, v>
                );
              })}
            </d, i, v>
          </d, i, v>
        </secti, o, n>
        {/* Integratio, n, s */}
        <section, className="py-20, b, g-gr, a, y-50">
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6 l
  g:px-8">"
            <div, className="te, x, t-center, m, b-16">
              <h2, className="te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">
        <section, className="py-20, b, g-gr, a, y-50">";
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6, l, g:px-8">";
            <div, className="te, x, t-center, m, b-16">";
              <h2, className="te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">";
                Seamless, Integration, s;
              </h2>
              <p, className="text-xl text-gray-600 max-w-3xl mx-auto">";
                Connect, with, your existing, tools, and systems, for, a unified, experienc, e.
              </p>
            </d, i, v>
            <div, className="grid, m, d: gr, i, d-co, l, s-2 l
  g:gr, i, d-co, l, s-3, ga, p-8">"
              {integratio, n, s.m, a, p((integrati, o, n, ind, e, x) => {
                const, Ico, n = integrati, o, n.ic, o, n;
                return (
                  <div, ke, y={ind, e, x} classNa, m, e="bg-whit, e, p-8, rounde, d-xl, shado, w-lg, border, border-gr, a, y-2, 0, 0">
                    <div, className="inli, n, e-flex, item, s-center, justif, y-cente, r, w-1, 6, h-16, b, g-viol, e, t-100, rounde, d-full, m, b-6">
                      <Icon, className="w-8 h-8, tex, t-viol, e, t-6, 0, 0  />
            <div, className="grid, m, d: gr, i, d-co, l, s-2 l
  g:gr, i, d-co, l, s-3, ga, p-8">";
              {integratio, n, s.m, a, p((integrati, o, n, ind, e, x) => {
                const, Ico, n = integrati, o, n.ic, o, n;
                return (
                  <div, ke, y={ind, e, x} classNa, m, e="bg-whit, e, p-8, rounde, d-xl, shado, w-lg, border, border-gr, a, y-2, 0, 0">";
                    <div, className="inli, n, e-flex, item, s-center, justif, y-cente, r, w-1, 6, h-16, b, g-viol, e, t-100, rounde, d-full, m, b-6">";
                      <Icon, className="w-8 h-8, tex, t-viol, e, t-6, 0, 0" />";
                    </d, i, v>
                    <h3, className="te, x, t-xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">{integrati, o, n.na, m, e}</h3>";
                    <p, className="te, x, t-gr, a, y-6, 0, 0">{integrati, o, n.descripti, o, n}</p>";
                  </d, i, v>
                );
              })}
            </d, i, v>
          </d, i, v>
        </secti, o, n>
        {/* Featur, e, s */}
        <section, className="py-20">
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6 l
  g:px-8">"
            <div, className="te, x, t-center, m, b-16">
              <h2, className="te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">
        <section, className="py-20">";
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6 l
  g:px-8">";
            <div, className="te, x, t-center, m, b-16">";
              <h2, className="te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">";
                Advanced, AI, Capabilities;
              </h2>
              <p, className="text-xl text-gray-600 max-w-3xl mx-auto">";
                Powerful, features, that make, conversations, natural, intellige, n, t, and, effectiv, e.
              </p>
            </d, i, v>
            <div, className="grid, m, d: gr, i, d-co, l, s-2 l
  g:gr, i, d-co, l, s-3, ga, p-8">"
              {featur, e, s.m, a, p((featu, r, e, ind, e, x) => {
                const, Ico, n = featu, r, e.ic, o, n;
                return (
                  <div, ke, y={ind, e, x} classNa, m, e="bg-whit, e, p-8, rounde, d-xl, shado, w-lg, border, border-gr, a, y-200, hove, r: shad, o, w-xl, transitio, n-shad, o, w">"
                    <div, className="inli, n, e-flex, item, s-center, justif, y-cente, r, w-1, 2, h-12, b, g-viol, e, t-100, rounde, d-lg, m, b-4">
                      <Icon, className="w-6 h-6, tex, t-viol, e, t-6, 0, 0  />
                    </d, i, v>
                    <h3, className="te, x, t-xl, fon, t-bold, tex, t-gr, a, y-900, m, b-3">{featu, r, e.tit, l, e}</h3>
                    <p, className="te, x, t-gr, a, y-600, m, b-4">{featu, r, e.descripti, o, n}</p>
                    <div, className="inli, n, e-flex, item, s-center, tex, t-gre, e, n-600, fon, t-semibold, tex, t-sm">
                      <CheckCircle, className="w-4 h-4, m, r-1  />
            <div, className="grid, m, d: gr, i, d-co, l, s-2 l
  g:gr, i, d-co, l, s-3, ga, p-8">";
              {featur, e, s.m, a, p((featu, r, e, ind, e, x) => {
                const, Ico, n = featu, r, e.ic, o, n;
                return (
                  <div, ke, y={ind, e, x} classNa, m, e="bg-whit, e, p-8, rounde, d-xl, shado, w-lg, border, border-gr, a, y-200, hove, r: shad, o, w-xl, transitio, n-shad, o, w">";
                    <div, className="inli, n, e-flex, item, s-center, justif, y-cente, r, w-1, 2, h-12, b, g-viol, e, t-100, rounde, d-lg, m, b-4">";
                      <Icon, className="w-6 h-6, tex, t-viol, e, t-6, 0, 0" />";
                    </d, i, v>
                    <h3, className="te, x, t-xl, fon, t-bold, tex, t-gr, a, y-900, m, b-3">{featu, r, e.tit, l, e}</h3>";
                    <p, className="te, x, t-gr, a, y-600, m, b-4">{featu, r, e.descripti, o, n}</p>";
                    <div, className="inli, n, e-flex, item, s-center, tex, t-gre, e, n-600, fon, t-semibold, tex, t-sm">";
                      <CheckCircle, className="w-4 h-4, m, r-1" />";
                      {featu, r, e.benef, i, t}
                    </d, i, v>
                  </d, i, v>
                );
              })}
            </d, i, v>
          </d, i, v>
        </secti, o, n>
        {/* Prici, n, g */}
        <section, i, d="prici, n, g" classNa, m, e="py-20, b, g-gr, a, y-50">
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6 l
  g:px-8">"
            <div, className="te, x, t-center, m, b-16">
              <h2, className="te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">
        <section, i, d="prici, n, g" classNa, m, e="py-20, b, g-gr, a, y-50">";
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6, l, g:px-8">";
            <div, className="te, x, t-center, m, b-16">";
              <h2, className="te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">";
                Transparent, Pricing, for Every, Business, Size;
              </h2>
              <p, className="text-xl text-gray-600 max-w-3xl mx-auto">";
                Choose, the, plan that, fits, your conversational, AI, needs and, conversation, volume.
              </p>
            </d, i, v>
            <div, className="gri, d, m
  d: gr, i, d-co, l, s-3, ga, p-8">"
            <div, className="grid, m, d: gr, i, d-co, l, s-3, ga, p-8">";
              {prici, n, g.m, a, p((pl, a, n, ind, e, x) => (
                <div, ke, y={ind, e, x} classNa, m, e={`bg-white, rounde, d-2xl, shado, w-l, g, p-8 ${pl, a, n.popul, a, r ? 'ri, n, g-2, rin, g-viol, e, t-500, relativ, e' : ''}`}>`;`
                  {pl, a, n.popul, a, r && (
                    <div, className="absolu, t, e -t, o, p-4, lef, t-1/2, transfor, m -transla, t, e-x-1/2">";
                      <span, className="bg-viol, e, t-500, tex, t-white, p, x-4, p, y-1, rounde, d-full, tex, t-sm, fon, t-semibo, l, d">";
                        Most, Popula, r;
                      </sp, a, n>
                    </d, i, v>
                  )}
                  <div, className="te, x, t-center, m, b-8">";
                    <h3, className="te, x, t-2xl, fon, t-bold, tex, t-gr, a, y-900, m, b-2">{pl, a, n.na, m, e}</h3>";
                    <div, className="flex, item, s-center, justif, y-center, m, b-2">";
                      <span, className="te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-9, 0, 0">{pl, a, n.pri, c, e}</sp, a, n>";
                      <span, className="te, x, t-gr, a, y-600, m, l-1">/{pl, a, n.peri, o, d}</sp, a, n>";
                    </d, i, v>
                    <p, className="te, x, t-gr, a, y-6, 0, 0">{pl, a, n.descripti, o, n}</p>";
                  </d, i, v>
                  <ul, className="spa, c, e-y-4, m, b-8">";
                    {pl, a, n.featur, e, s.m, a, p((featu, r, e, featureInd, e, x) => (
                      <li, ke, y={featureInd, e, x} classNa, m, e="flex, item, s-cent, e, r">
                        <CheckCircle, className="w-5 h-5, tex, t-gre, e, n-500, m, r-3, fle, x-shri, n, k-0  />
                        <span, className="te, x, t-gr, a, y-7, 0, 0">{featu, r, e}</sp, a, n>
                      <li, ke, y={featureInd, e, x} classNa, m, e="flex, item, s-cent, e, r">";
                        <CheckCircle, className="w-5 h-5, tex, t-gre, e, n-500, m, r-3, fle, x-shri, n, k-0" />";
                        <span, className="te, x, t-gr, a, y-7, 0, 0">{featu, r, e}</sp, a, n>";
                      </li>
                    ))}
                  </ul>
                  <a
  hr, e, f="/conta, c, t"
                    classNa, m, e={
`w-full, block, text-center, p, y-3, p, x-6, rounde, d-lg, fon, t-semibold, transitio, n-colo, r, s ${`;`
pl, a, n.popul, a, r;
? 'bg-viol, e, t-600, tex, t-white, hove, r: bg-viol, e, t-7, 0, 0'
? 'bg-viol, e, t-600, tex, t-white, hov, e
  r: bg-viol, e, t-7, 0, 0',';
: 'bg-gr, a, y-100, tex, t-gr, a, y-900, hove, r:bg-gr, a, y-2, 0, 0'
}`}`;`
                  >
                    Get, Starte, d;
                  </a>
                </d, i, v>
              ))}
            </d, i, v>
            <div, className="te, x, t-center, m, t-12">";
              <p, className="te, x, t-gr, a, y-600, m, b-4">Need, a, custom conversational, AI, solution?</p>";
              <a
  hr, e, f="/conta, c, t"
                classNa, m, e="inli, n, e-flex, item, s-center, tex, t-viol, e, t-600, hove, r: te, x, t-viol, e, t-700, fon, t-semibo, l, d"
              >
                Contact, our, AI Te, a, m;
                <Link, className="w-4 h-4, m, l-1  />
                <Link, className="w-4 h-4, m, l-1" />";
              </a>
            </d, i, v>
          </d, i, v>
        </secti, o, n>
        {/* Testimonia, l, s */}
        <section, className="py-20">
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6 l
  g:px-8">"
            <div, className="te, x, t-center, m, b-16">
              <h2, className="te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">
        <section, className="py-20">";
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6, l, g:px-8">";
            <div, className="te, x, t-center, m, b-16">";
              <h2, className="te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">";
                What, Our, Clients S, a, y;
              </h2>
              <p, className="text-xl text-gray-600 max-w-3xl mx-auto">";
                Join, hundreds, of companies, already, using our, conversational, AI to, transform, customer engageme, n, t.
              </p>
            </d, i, v>
            <div, className="gri, d, m
  d: gr, i, d-co, l, s-3, ga, p-8">"
            <div, className="grid, m, d: gr, i, d-co, l, s-3, ga, p-8">";
              {testimonia, l, s.m, a, p((testimoni, a, l, ind, e, x) => (
                <div, ke, y={ind, e, x} classNa, m, e="bg-whit, e, p-8, rounde, d-xl, shado, w-lg, border, border-gr, a, y-2, 0, 0">";
                  <div, className="flex, item, s-center, m, b-4">";
                    {[...Arr, a, y(testimoni, a, l.rati, n, g)].m, a, p((_, i) => (
                      <Star, ke, y={i} classNa, m, e="w-5 h-5, tex, t-yell, o, w-400, fil, l-curre, n, t  />
                      <Star, ke, y={i} classNa, m, e="w-5 h-5, tex, t-yell, o, w-400, fil, l-curre, n, t" />";
                    ))}
                  </d, i, v>
                  <blockquote, className="te, x, t-gr, a, y-700, m, b-6, itali, c">";
                    "{testimoni, a, l.conte, n, t}"
                  </blockquo, t, e>
                  <d, i, v>
                    <div, className="fo, n, t-semibold, tex, t-gr, a, y-9, 0, 0">{testimoni, a, l.na, m, e}</d, i, v>";
                    <div, className="te, x, t-gr, a, y-600, tex, t-sm">{testimoni, a, l.ro, l, e}</d, i, v>";
                    <div, className="te, x, t-viol, e, t-600, tex, t-sm, fon, t-medi, u, m">{testimoni, a, l.compa, n, y}</d, i, v>";
                  </d, i, v>
                </d, i, v>
              ))}
            </d, i, v>
          </d, i, v>
        </secti, o, n>
        {/* CTA, Sectio, n */}
        <section, className="py-20, b, g-gradie, n, t-to-br, fro, m-viol, e, t-900, vi, a-purp, l, e-800, t, o-pi, n, k-900, tex, t-whi, t, e">
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6 l
  g:px-8, tex, t-cent, e, r">"
            <h2, className="te, x, t-4xl, fon, t-bold, m, b-6">
        <section, className="py-20, b, g-gradie, n, t-to-br, fro, m-viol, e, t-900, vi, a-purp, l, e-800, t, o-pi, n, k-900, tex, t-whi, t, e">";
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6 l
  g:px-8, tex, t-cent, e, r">";
            <h2, className="te, x, t-4xl, fon, t-bold, m, b-6">";
              Ready, to, Transform Your, Customer, Conversations?
            </h2>
            <p, className="te, x, t-xl, tex, t-viol, e, t-100, ma, x-w-3xl, m, x-auto, m, b-8">";
              Deploy, advanced, conversational AI, that, understands, respon, d, s, and, engages, with 96% accuracy, across, 150+ languag, e, s.
            </p>
            <div, className="flex, fle, x-col, s, m: fl, e, x-row, ga, p-4, justif, y-cent, e, r">"
            <div, className="flex, fle, x-col, s, m: fl, e, x-row, ga, p-4, justif, y-cent, e, r">";
              <a
  hr, e, f="/conta, c, t"
                classNa, m, e="inli, n, e-flex, item, s-center, p, x-8, p, y-4, b, g-viol, e, t-600, hov, e
  r: bg-viol, e, t-700, tex, t-white, fon, t-semibold, rounde, d-lg, transitio, n-colo, r, s"
              >
                <Phone, className="w-5 h-5, m, r-2  />
                <Phone, className="w-5 h-5, m, r-2" />";
                Schedule, Dem, o;
              </a>
              <a
  hr, e, f="/ca, s, e-studi, e, s"
                classNa, m, e="inli, n, e-flex, item, s-center, p, x-8, p, y-4, borde, r-2, borde, r-white, tex, t-white, hove, r: bg-white, hov, e
  r:te, x, t-viol, e, t-900, fon, t-semibold, rounde, d-lg, transitio, n-colo, r, s"
              >
                View, Success, Stories;
                <Link, className="w-5 h-5, m, l-2  />
                <Link, className="w-5 h-5, m, l-2" />";
              </a>
            </d, i, v>
          </d, i, v>
        </secti, o, n>
      </ma, i, n>
      <Foot, e, r   />
    < />
  );
};
export default ConversationalAI;
}}}}}}