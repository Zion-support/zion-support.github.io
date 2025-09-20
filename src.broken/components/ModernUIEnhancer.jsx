
      .fade - in - visible {
        opacity: 1;
        transform: translateY(0) }

      .slide - in - left {
        opacity: 0;
        transform: translateX(-50px) ;
        transition: opacity 0.6s ease - out, transform 0.6s ease - out}

      .slide - in - left - visible {
        opacity: 1;
        transform: translateX(0) }

      .slide - in - right {
        opacity: 0;
        transform: translateX(50px) ;
        transition: opacity 0.6s ease - out, transform 0.6s ease - out}

      .slide - in - right - visible {
        opacity: 1;
        transform: translateX(0) }

      .scale - in {
        opacity: 0;
        transform: scale(0.8) ;
        transition: opacity 0.6s ease - out, transform 0.6s ease - out}

      .scale - in - visible {
        opacity: 1;
        transform: scale(1) }

      .bounce - in {
        animation: bounceIn 0.8s ease - out}

        animation: floating 3s ease - in - out infinite}

        animation: glow 2s ease - in - out infinite alternate}


      .gradient - text {
        background: linear - gradient(135deg, #667eea 0%, #764ba2 100%) ;
        -webkit - background - clip: text;
        -webkit - text-fill - color: transparent;
        background - clip: text}

      .glass - effect {
        background: rgba(255, 255, 255, 0.1) ;
        backdrop - filter: blur(10px) ;
        border: 1px solid rgba(255, 255, 255, 0.2) }

      .glass - effect - dark {
        background: rgba(0, 0, 0, 0.1) ;
        backdrop - filter: blur(10px) ;
        border: 1px solid rgba(255, 255, 255, 0.1) }

      .hover - lift {
        transition: transform 0.3s ease, box - shadow 0.3s ease}

      .hover - lift:hover {
        transform: translateY(-5px) ;
        box - shadow: 0 20px 40px rgba(0, 0, 0, 0.1) }

      .text-shadow {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3) }

      .text-shadow-light {
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1) }
