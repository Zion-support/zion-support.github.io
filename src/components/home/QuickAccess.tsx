import { motion  } from 'framer-motion';
export default function Page() {";
    { name: "Consulting", count: 6, color: "from-yellow-500 to-orange-500" },";
    { name: "Innovation", count: 10, color: "from-green-500 to-teal-500" },";
    { name: "Business", count: 14, color: "from-indigo-500 to-purple-500" };      scale: 1,
      transition: {
        duration: 0.5, ";
        ease: "ease_out"}}}
  const hover_variants = {
  hover: {
      transition: {
        duration: 0.3, "  ease: "ease_out";
}}}
}
}
}
}}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}";
          className="text - center mb - 16">;
          <motion.div;
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition = {
}}
            viewport={{ once: true }}";
            className="inline - flex items - center gap - 2 px - 4 py - 2 bg - zion - cyan / 10 border border - zion - cyan / 20 rounded - full text - zion - cyan mb - 6">;
            Quick Access to Our Services;
          </motion.h2>;
          <motion.p;
            initial = {
              key={link.title}
              variants={hover_variants}";
              while_hover="hover";
              onHoverStart={(: unknown setHoveredCategory (link.title)}
              onHoverEnd={: unknown setHoveredCategory (null)}
              on_click={: unknown setSelectedCategory (selected_category === link.title ? null : link.title)}
              className={`group cursor - pointer ${link.bg_color} ${link.border_color} border rounded - 2xl p - 6 backdrop - blur - sm transition - all duration - 300 hover:shadow - 2xl hover:shadow - zion - cyan / 25`}
            >;
              {/* Icon and Header */}";
              <div className="flex items - start justify - between mb - 4">;
                <motion.div`;
                  className={`p - 3 rounded - xl bg - gradient - to - r ${link.color} bg - opacity - 20`}
                  while_hover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >";
                  <link.icon className="w - 6 h - 6 text - white" />;
                </motion.div>;
                <motion.div;
                  animate={{ rotate: hovered_category === link.title ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >";
                  <ChevronRight className="w - 5 h - 5 text - gray - 400 group - hover:text - zion - cyan transition - colors"  />                </motion.div>;
              </div>;
              {/* Content */}";
              <div className="mb - 4">";
                <h3 className="text - xl font - bold text - white mb - 2 group - hover:text - zion - cyan transition - colors">;
                  {link.title}
                </h3>";
                <p className="text - gray - 300 text - sm leading - relaxed">;
                  {link.description}
                </p>;
              </div>;
              {/* Features Preview */}";
              <div className="mb - 4">";
                <div className="grid grid - cols - 2 gap - 2">;
                  {link.features.slice (0, 2).map (feature: unknown, idx: unknown (
                    <motion.div;
                      key={feature}
                      initial = {
                  ))}
                </div>
              </div>
              {/* CTA */}

  { opacity: 0,
  scale: 0.8;
}}
                      whileInView = {
  { opacity: 1,
  scale: 1;
}}
                      transition = {
  { duration: 0.4,
  delay: 0.2 + idx * 0.1;
}}
                      viewport={{ once: true }}";
                      className="text - center">";
                      <div className="text - lg font - bold text - zion - cyan">{value}</div>";
                      <div className="text - xs text - gray - 500 capitalize">{key}</div>;
                    </motion.div>))}
                </div>;
              </div>;
              {/* CTA */}
              <motion.div;
                while_hover={{ scale: 1.05 }}
                while_tap={{ scale: 0.95 }}";
                className="mt - auto">;
                <Link;
                  to={link.path}`;
                  className={`inline - flex items - center justify - center w - full px - 4 py - 3 bg - gradient - to - r ${link.color} text - white font - semibold rounded - lg transition - all duration - 300 hover:shadow - lg hover:shadow - zion - cyan / 25`}
                >;
                  Explore {link.title}";
                  <ChevronRight className="w - 4 h - 4 ml - 2 group - hover:translate - x-1 transition - transform"  />                </Link>;
              </motion.div>;
            </motion.div>))}
        </div>;
      </div>;
    </section>);
export default QuickAccess }
