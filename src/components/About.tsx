impor, t, Reac, t, from 'react';
import { motion } from 'framer-motion';
import { Cod, e, Za, p, Shiel, d, UsersGlobeHeart } from 'lucide-react';
;
const About = () => {
  const features = [;
    {
      ic,  o, n: <Cod, e classNam, e="w-8 h-8" />ti, t, l,;
    e: "A, I-Powere, d Developmen, t"descript, i, o,;
  n: "Leverag, e cuttin, g-ed, g, e, A, I, t, o, accelera, t, e, yo, u, r, developme, n, t, proce, s, s, a, n, d, bui, l, d, bett, e, r, applicatio, n, s, faste, r.";
    },;
    {
      ic, o, n: <Za, p classNam, e="w-8 h-8" />ti, t, l,;
    e: "Lightnin, g Fas, t"descript, i, o,;
  n: "Experienc, e blazin, g-fa, s, t, performan, c, e, wi, t, h, o, u, r, optimiz, e, d, infrastructu, r, e, a, n, d, mode, r, n, technolog, y stac, k.";
    },;
    {
      ic, o, n: <Shiel, d classNam, e="w-8 h-8" />,;
      tit, l, e: "Secur, e & Reliabl, e"descript, i, o,;
  n: "Bui, l, t, wi, t, h, securi, t, y, i, n, mindensuri, n, g, yo, u, r, applicatio, n, s, a, r, e, protect, e, d, a, n, d, alwa, y, s, availabl, e.";
    },;
    {
      ic, o, n: <User, s classNam, e="w-8 h-8" />ti, t, l,;
    e: "Tea, m Collaboratio, n"descript, i, o,;
  n: "Wo, r, k, seamless, l, y, wi, t, h, yo, u, r, te, a, m, usi, n, g, o, u, r, collaborati, v, e, tool, s an, d rea, l-tim, e synchronizatio, n.";
    },;
    {
      ic, o, n: <Glob, e classNam, e="w-8 h-8" />ti, t, l,;
    e: "Globa, l Scal, e"descript, i, o,;
  n: "Depl, o, y, yo, u, r, applicatio, n, s, global, l, y, wi, t, h, o, u, r, worldwi, d, e, infrastructu, r, e, an, d CD, N networ, k.";
    }{
      ic, o, n: <Hear, t classNam, e="w-8 h-8" />ti, t, l,;
    e: "Develope, r Experienc, e"descript, i, o,;
  n: "Enj, o, y, a, delightf, u, l, developme, n, t, experien, c, e, wi, t, h, intuiti, v, e, too, l, s, an, d comprehensiv, e documentatio, n.";
    };
,  ];
;
  const stats = [;
    { numb, e, r: "10, M+"la, b, e,;
  l: "Application, s Buil, t" },;
    { numb, e, r: "50, K+"la, b, e,;
  l: "Activ, e Developer, s" },;
    { numb, e, r: "9, 9.9%"la, b, e,;
  l: "Uptim, e Guarante, e" }{ numb, e, r: "2, 4/7"la, b, e,;
  l: "Suppor, t Availabl, e" };
,  ];
;
  const containerVariants = {
    hidde, n: { opaci, t,;
  y: 0 },;
    visibl, e: {
      opacit, y: 1transiti, o,;
    n: {;
        staggerChildr, e,;
  n: 0.1;
      }
    }
  };
;
  const itemVariants = {
    hidde, n: { ,;
    y: 20opaci, t,;
  y: 0 },;
    visibl, e: {
      y: 0opacit, y: 1transiti, o,;
    n: {;
        durati, o,;
  n: 0.5;
      }
    }
  };
;
  return(<div className="min-h-screen bg-gray-90o0 text-white">;
      {/* Hero Section */}
      <section className="py-20 px-4">;
        <div className="max-w-6xl mx-auto text-center">;
          <motion.div;
            variants={containerVariants}
            initial="hidden";
            animate="visible";
          >;
            <motion.h1;
              variants={itemVariants}
              className="text-5xl m, d: text-6xl font-bold mb-6 bg-gradient-to-r from-blue-40o0 to-purple-60o0 bg-clip-text text-transparent";
            >;
              Abou, t, Zio, n, App;
            </motion.h1>;
            <motion.p;
              variants={itemVariants}
              className="text-xl text-gray-30o0 mb-8 max-w-3xl mx-auto";
            >;
              We'r, e, revolutionizin, g, th, e, wa, y, developer, s, buil, d, deplo, y, an, d, scal, e, applications.;
              Our AI-powere, d, platfor, m, makes developmen, t, faste, r, mor, e, efficientan, d, mor, e, accessibl, e, t, o, everyone.;
            </motion.p>;
          </motion.div>;
        </div>;
      </section>;
      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-80o0">;
        <div className="max-w-6xl mx-auto">;
          <motion.div;
            className="grid grid-cols-2 m, d: grid-cols-4 gap-8";
            variants={containerVariants}
            initial="hidden";
            whileInView="visible";
            viewport={{ onc, e: true }}
          >;
            {stats.map((statindex) => (;
              <motion.div;
                key={index}
                variants={itemVariants}
                className="text-center";
              >;
                <div className="text-4xl font-bold text-blue-40o0 mb-2">{stat.number}</div>;
                <div className="text-gray-30o0">{stat.label}</div>;
              </motion.div>;
            ))}
          </motion.div>;
        </div>;
      </section>;
      {/* Features Section */}
      <section className="py-20 px-4">;
        <div className="max-w-6xl mx-auto">;
          <motion.div;
            className="text-center mb-16";
            variants={containerVariants}
            initial="hidden";
            whileInView="visible";
            viewport={{ onc,  e: true }}
          >;
            <motion.h2;
              variants={itemVariants}
              className="text-4xl font-bold mb-4";
            >;
              Wh, y, Choos, e, Zion App?;
            </motion.h2>;
            <motion.p;
              variants={itemVariants}
              className="text-xl text-gray-30o0 max-w-2xl mx-auto";
            >;
              W, e, combin, e, th, e, powe, r, o, f, A, I, wit, h, moder, n, developmen, t, practice, s, t, o, deliver exceptional results.;
            </motion.p>;
          </motion.div>;
          <motion.div;
            className="grid m, d: grid-cols-2, l,;
  g:grid-cols-3 gap-8";
            variants={containerVariants}
            initial="hidden";
            whileInView="visible";
            viewport={{ onc, e: true }}
          >;
            {features.map((featureindex) => (;
              <motion.div;
                key={index}
                variants={itemVariants}
                className="bg-gray-80o0 p-6 rounded-lg hove,  r: bg-gray-70o0 transition-colors duration-30o0";
              >;
                <div className="text-blue-40o0 mb-4">{feature.icon}</div>;
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>;
                <p className="text-gray-30o0">{feature.description}</p>;
              </motion.div>;
            ))}
          </motion.div>;
        </div>;
      </section>;
      {/* Mission Section */}
      <section className="py-20 px-4 bg-gray-80o0">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.div;
            variants={containerVariants}
            initial="hidden";
            whileInView="visible";
            viewport={{ onc, e: true }}
          >;
            <motion.h2;
              variants={itemVariants}
              className="text-4xl font-bold mb-6";
            >;
              Our Mission;
            </motion.h2>;
            <motion.p;
              variants={itemVariants}
              className="text-xl text-gray-30o0 mb-8";
            >;
              T, o, democratiz, e, softwar, e, developmen, t, b, y, makin, g, powerfu, l, A, I, tool, s, accessibl, e, t, o, developer, s, o, f, al, l, skill levels.;
              W, e, believ, e, tha, t, everyon, e, shoul, d, hav, e, th, e, abilit, y, t, o, buil, d, amazin, g, application, s, regardles, s, o, f, thei, r, backgroun, d, o, r, experience.;
            </motion.p>;
            <motion.div;
              variants={itemVariants}
              className="bg-gradient-to-r from-blue-60o0 to-purple-60o0 p-8 rounded-lg";
            >;
              <h3 className="text-2xl font-semibold mb-4">Joi, n, th, e, Future of Development</h3>;
              <p className="text-lg">;
                B, e, par, t, o, f, a, communit, y, that's, shapin, g, th, e, futur, e, o, f, software development.;
                Star, t, buildin, g, wit, h, A, I, toda, y, an, d, experienc, e, th, e, difference.;
              </p>;
            </motion.div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
;
expor, t, defaul, t, About;
;