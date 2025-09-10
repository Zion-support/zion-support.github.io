import React from "react"
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
        // comment;
draw() {

        if (ctx) {;
          const alpha = this.life / this.maxLife
          ctx.save()


          ctx.globalAlpha = alpha
          ctx.fillStyle = this.color