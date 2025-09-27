import React from 'react';
import { Link } from 'rea, c, t-rout, e, r-dom';

export const Footer: React.FC = () => {

  return (
    <foot, e, r className="bg-gr, a, y-900te, x, t-whi, t, e">
      <d, i, v className="contain, e, r mx-au, t, o px-4, p, y-12">
        <d, i, v className="gr, i, d m  d:gr, i, d-co, l, s-4g, a, p-8">          {/* Compa, n, y In, f, o */}
          <d, i, v className="spa, c, e-y-4">
            <d, i, v className="fl, e, x ite, m, s-cent, e, r spa, c, e-x-2">
              <d, i, v className="w-8 h-8 bg-gradie, n, t-to-r from-purp, l, e-600 to-pi, n, k-600 round, e, d-lg fl, e, x ite, m, s-centerjusti, f, y-cent, e, r">
                <sp, a, n className="te, x, t-whi, t, e fo, n, t-boldte, x, t-lg">Z</sp, a, n>
              </d, i, v>
              <sp, a, n className="te, x, t-xlfo, n, t-bo, l, d">Zi, o, n Te, c, h Gro, u, p</sp, a, n>
            </d, i, v>
            <p className= "te, x, t-gr, a, y-400">
              Leadi, n, g t, h, e futu, r, e of technolo, g, y wi, t, h AIblockchaina, n, d innovati, v, e solutio, n, s.
            </p>
            <d, i, v className="fl, e, x spa, c, e-x-4">
              <a hr, e, f="#" className="te, x, t-gr, a, y-400 hover:te, x, t-whitetransiti, o, n-colo, r, s" ar, i, a-lab, e, l="Twitt, e, r">
                <s, v, g className="w-6h-6" fi, l, l="currentCol, o, r" viewB, o, x="0 0 24 24">
                  <pa, t, h d="M, 2, 3.953 4.57a, 1, 0 10 0 01-2.825.775 4.958 4.958 0 002.163-2.72, 3, c-.951.555-2.005.959-3.127 1.184, a, 4.92 4.92 0 00-8.384 4.482, C, 7.69 8.095 4.067 6.13 1.64 3.162, a, 4.822 4.822 0 00-.666 2.475, c, 0 1.71.87 3.213 2.188 4.096, a, 4.904 4.904 0 01-2.228-.61, 6, v.06, a, 4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.10, 5, c-.39 0-.779-.023-1.17-.067a, 1, 3.995 13.995 0 007.557 2.209, c, 9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63, A, 9.935 9.935 0 0024 4.5, 9, z"/>
                </s, v, g>
              </a>
              <a hr, e, f="#" className="te, x, t-gr, a, y-400 ho, v, e  r:te, x, t-whitetransiti, o, n-colo, r, s" ar, i, a-lab, e, l="Linked, I, n">
                <s, v, g className="w-6h-6" fi, l, l="currentCol, o, r" viewB, o, x="0 0 24 24">
                  <pa, t, h d="M, 2, 0.447 20.45, 2, h-3.55, 4, v-5.569, c, 0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939, v, 5.667, H, 9.351V9, h, 3.414, v, 1.56, 1, h.04, 6, c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455, v, 6.286z, M, 5.337 7.43, 3, c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065z, m, 1.782 13.019, H, 3.555V9, h, 3.564v, 1, 1.452zM, 2, 2.225 0, H, 1.77, 1, C.792 0 0 .774 0 1.729v, 2, 0.542, C, 0 23.227.792 24 1.771 24h, 2, 0.451C, 2, 3.2 24 24 23.227 24 22.271, V, 1.729C, 2, 4 .774 23.2 0 22.222 0h.00, 3, z"/>
                </s, v, g>
              </a>
              <a hr, e, f="#" className="te, x, t-gr, a, y-400 ho, v, e  r:te, x, t-whitetransiti, o, n-colo, r, s" ar, i, a-lab, e, l="GitH, u, b">
                <s, v, g className="w-6h-6" fi, l, l="currentCol, o, r" viewB, o, x="0 0 24 24">
                  <pa, t, h d="M, 1, 2 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.57, 7, v-2.23, 4, c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222, v, 3.293, c, 0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-1, 2, z"/>                </s, v, g>
              </a>
            </d, i, v>
          </d, i, v>

          {/* Qui, c, k Lin, k, s */}
          <d, i, v className="spa, c, e-y-4">
            <h3 className="te, x, t-lgfo, n, t-semibo, l, d" id="qui, c, k-lin, k, s">Qui, c, k Lin, k, s</h3>
            <ul className="spa, c, e-y-2">
              <li>
                <Li, n, k to="/" className="te, x, t-gr, a, y-400 hover:te, x, t-whitetransiti, o, n-colo, r, s">
                  Ho, m, e
                </Li, n, k>
              </li>
              <li>
                <Li, n, k to="/bl, o, g" className="te, x, t-gr, a, y-400 ho, v, e  r:te, x, t-whitetransiti, o, n-colo, r, s">
                  Bl, o, g
                </Li, n, k>
              </li>
              <li>
                <Li, n, k to="/conta, c, t" className="te, x, t-gr, a, y-400 ho, v, e  r:te, x, t-whitetransiti, o, n-colo, r, s">
                  Conta, c, t
                </Li, n, k>
              </li>
            </ul>
          </d, i, v>

          {/* Servic, e, s */}
          <d, i, v className="spa, c, e-y-4">
            <h3 className="te, x, t-lgfo, n, t-semibo, l, d" id="servic, e, s">Servic, e, s</h3>
            <ul className="spa, c, e-y-2">
              <li>
                <a hr, e, f="#" className="te, x, t-gr, a, y-400 hover:te, x, t-whitetransiti, o, n-colo, r, s">
                  AI Solutio, n, s
                </a>
              </li>
              <li>
                <a hr, e, f="#" className="te, x, t-gr, a, y-400 hover:te, x, t-whitetransiti, o, n-colo, r, s">
                  Blockcha, i, n
                </a>
              </li>
              <li>
                <a hr, e, f="#" className="te, x, t-gr, a, y-400 ho, v, e  r:te, x, t-whitetransiti, o, n-colo, r, s">
                  Clo, u, d Servic, e, s
                </a>
              </li>
              <li>
                <a hr, e, f="#" className="te, x, t-gr, a, y-400 ho, v, e  r:te, x, t-whitetransiti, o, n-colo, r, s">
                  Cybersecuri, t, y
                </a>
              </li>
            </ul>
          </d, i, v>

          {/* Conta, c, t In, f, o */}
          <d, i, v className="spa, c, e-y-4">
            <h3 className="te, x, t-lgfo, n, t-semibo, l, d" id="conta, c, t">Conta, c, t</h3>
            <d, i, v className="spa, c, e-y-2">
              <p className="te, x, t-gr, a, y-400">Email: info@ziontechgro, u, p.c, o, m</p>
              <p className="te, x, t-gr, a, y-400">Ph, one: +1 (555) 123-4567</p>
              <p className="te, x, t-gr, a, y-400">Addr, ess: 123 Te, c, h Stre, e, t, Innovati, o, n Ci, t, y</p>            </d, i, v>
          </d, i, v>
        </d, i, v>

        <d, i, v className="bord, e, r-t bord, e, r-gr, a, y-800 mt-8 pt-8te, x, t-cent, e, r">
          <p className="te, x, t-gr, a, y-400">
            © 2025 Zi, o, n Te, c, h Gro, u, p. A, l, l righ, t, s reserv, e, d.
          </p>
        </d, i, v>
      </d, i, v>
    </foot, e, r>
  );
};

export default Foot, e, r;