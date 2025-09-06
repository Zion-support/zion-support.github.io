        {/* Stats Grid */}
        <div className="grid grid - cols - 2 md:grid - cols - 4 gap - 6 max - w-4xl mx - auto mb - 16">;
          {stats.map ((stat, index) => (
            <div;
              key={index}
              className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 text - center";
            >;
              <div className="text - 3xl md:text - 4xl font - bold text - zion - cyan mb - 2">;
                {stat.value}
        {/* Rating display */}
        <div className="max - w-3xl mx - auto bg - zion - blue - dark border border - zion - purple / 30 rounded - lg p - 6">;
          <div className="flex justify - center mb - 4">;
            {[1, 2, 3, 4, 5].map ((star) => (
              <Star;
                key={star}
                className="w - 6 h - 6 text - zion - cyan";
                fill="current_color";
              />))}
          </div>;
          <blockquote className="text - center text - lg text - white italic mb - 4">;
            "The Zion app has completely changed how I find tech talent. The AI;
            matching is spot on and I can manage everything from anywhere.";
          </blockquote>;
          <div className="text - center">;
            <div className="font - semibold text - zion - cyan">Sarah Johnson</div>;
            <div className="text - sm text - zion - slate - light">CTO at TechFlow</div>;
          </div>;
        </div>;
      </div>;
    </section>);
}
;
