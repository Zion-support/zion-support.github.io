




                {whitepaper.category}
              </span>;
            </div>;
            <h1 className="text - 5xl font - extrabold mb - 6 bg - gradient - to - r from - cyan - 400 to - fuchsia - 400 bg - clip - text text - transparent">;
              {whitepaper.title}
            </h1>;
            <p className="text - xl text - white / 80 max - w-3xl mx - auto mb - 6">;
              {whitepaper.description}



          {/* Header */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          <header className="text-center mb-16">
            <div className="mb-6">
              <span className="px-4 py-2 bg-fuchsia-400/20 text-fuchsia-400 text-sm rounded-full border border-fuchsia-400/30">
                {whitepaper.category  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </span>
            </div>
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              {whitepaper.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-6">
              {whitepaper.description  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}



            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
              <span>By {whitepaper.author}</span>
              <span>•</span>
              <span>{whitepaper.pages} pages</span>
              <span>•</span>
              <span>{whitepaper.publishDate}</span>
            </div>
          </header>



          {/* Whitepaper Content */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


          <div className="max-w-4xl mx-auto">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">Executive Summary</h2>
              <p className="text-lg text-white/80">{whitepaper.content.executiveSummary}</p>
            </section>
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-fuchsia-400">Key Topics Covered</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {whitepaper.content.keyTopics.map((topic, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-xl rounded-lg p-4 border border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-fuchsia-400 rounded-full"></div>
                      <span className="text-white/90">{topic}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>


            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-green-400">Target Audience</h2>
              <p className="text-lg text-white/80">{whitepaper.content.targetAudience}</p>
            </section>



            </p>;
            <div className="flex flex - wrap justify - center gap - 6 text - sm text - white / 60">;
              <span > By {whitepaper.author}</span>;
              <span>•</span>;
              <span>{whitepaper.pages} pages</span>;
              <span>•</span>;
              <span>{whitepaper.publish_date}</span>;
            </div>;
          </header>;
          {/* Whitepaper Content */}
          <div className="max - w-4xl mx - auto">;
            <section className="mb - 12">;
              <h2 className="text - 3xl font - bold mb - 6 text - cyan - 400">Executive Summary</h2>;
              <p className="text - lg text - white / 80">{whitepaper.content.executive_summary}</p>;
            </section>;
            <section className="mb - 12">;
              <h2 className="text - 3xl font - bold mb - 6 text - fuchsia - 400">Key Topics Covered</h2>;
              <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
                {whitepaper.content.key_topics.map ((topic, index) => (
                  <div key={index} className="bg - white / 10 backdrop - blur - xl rounded - lg p - 4 border border - white / 20">;
                    <div className="flex items - center gap - 3">;
                      <div className="w - 2 h - 2 bg - fuchsia - 400 rounded - full"></div>;
                      <span className="text - white / 90">{topic}</span>;
                    </div>;
                  </div>))}
              </div>;
            </section>;
            <section className="mb - 12">;
              <h2 className="text - 3xl font - bold mb - 6 text - green - 400">Target Audience</h2>;
              <p className="text - lg text - white / 80">{whitepaper.content.target_audience}</p>;
            </section>;



            {/* Download Section */}
            <section className="mb - 12">;
              <div className="bg - gradient - to - r from - fuchsia - 500 / 10 to - purple - 500 / 10 rounded - 2xl p - 8 border border - fuchsia - 500 / 20 text - center">;
                <h2 className="text - 2xl font - bold mb - 4 text - white">Ready to Download?</h2>;
                <p className="text - white / 80 mb - 6">;
                  Get instant access to this comprehensive whitepaper and start implementing autonomous systems today.;
                </p>;
                <button className="px - 8 py - 4 bg - gradient - to - r from - fuchsia - 400 to - purple - 400 text - white rounded - lg font - semibold hover:from - fuchsia - 500 hover:to - purple - 500 transition - all duration - 300 text - lg">;
                  Download {whitepaper.title}



            {/* Download Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


            <section className="mb-12">
              <div className="bg-gradient-to-r from-fuchsia-500/10 to-purple-500/10 rounded-2xl p-8 border border-fuchsia-500/20 text-center">
                <h2 className="text-2xl font-bold mb-4 text-white">Ready to Download?</h2>
                <p className="text-white/80 mb-6">
                  Get instant access to this comprehensive whitepaper and start implementing autonomous systems today.
                </p>
                <button className="px-8 py-4 bg-gradient-to-r from-fuchsia-400 to-purple-400 text-white rounded-lg font-semibold hover:from-fuchsia-500 hover:to-purple-500 transition-all duration-300 text-lg">


                  Download {whitepaper.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

                </button>
                <p className="text-white/60 text-sm mt-4">
                  PDF format • {whitepaper.pages} pages • Free download
                </p>
              </div>
            </section>


            {/* Related Whitepapers */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-white">Explore More Whitepapers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.values(whitepapers)
                  .filter(w => w.id !== whitepaper.id)
                  .slice(0, 2)
                  .map((relatedPaper) => (




            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20">
                <h2 className="text-2xl font-bold mb-4 text-white">Need Custom Research?</h2>
                <p className="text-white/80 mb-6">
                  Our research team can conduct custom studies and create whitepapers tailored to your specific industry and needs.
                </p>
                <div className="flex flex-col sm: flex-row gap-4 justify-center">
                  <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300">
                    Contact Us
                  </Link>
                  <Link href="/services" className="px-6 py-3 border border-white/20 text-white rounded-lg hover:border-cyan-400/50 transition-all duration-300">
                    Our Services
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>

}





