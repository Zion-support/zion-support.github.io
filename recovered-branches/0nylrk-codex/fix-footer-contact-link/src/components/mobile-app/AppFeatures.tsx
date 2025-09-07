




import React from "react";""
import {Brain, Clock, Award, Zap} from "lucide-react";""
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from "@/components/ui/card";""
import React from "react",""
import { Brain, Clock, Award, Zap } from "lucide-react",""
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card","
const features = [
  {"
    icon: <Brain className="h-10 w-10 text-zion-cyan" />"
"
    icon: <Clock className="h-10 w-10 text-zion-cyan" />"
    icon: <Award className="h-10 w-10 text-zion-cyan" />"
    icon: <Zap className="h-10 w-10 text-zion-cyan" />"
    <section className="py-16 bg-zion-blue">"
</section>"
      <div className="container mx-auto px-4">"
</div>"
        <div className="text-center mb-12">"
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>""
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">"
</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">"
            <Card key={index} className="bg-zion-blue-dark border-zion-purple/30 hover:border-zion-cyan transition-colors duration-300">"

              <CardHeader>
                <div className="mb-4">{feature.icon}</div>""
                <CardTitle className="text-white">{feature.title}"
              
              <CardContent>
                <CardDescription className="text-gray-300">{feature.description}"
              
    icon: <Brain className="h-10 w-10 text-zion-cyan" />,;"
    icon: <Clock className="h-10 w-10 text-zion-cyan" />,;"
    icon: <Award className="h-10 w-10 text-zion-cyan" />,;"
    icon: <Zap className="h-10 w-10 text-zion-cyan" />,;"
    <section className="py-16 bg-zion-blue">;"
      <div className="container mx-auto px-4">;"
        <div className="text-center mb-12">;"
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>;""
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">;"
          </p>;
        </div>;"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;"
            <Card key={index} className="bg-zion-blue-dark border-zion-purple/30 hover:border-zion-cyan transition-colors duration-300">;"

              <CardHeader>;
                <div className="mb-4">{feature && feature.icon}</div>;""
                <CardTitle className="text-white">{feature && feature.title};"
              ;
              <CardContent>;
                <CardDescription className="text-gray-300">{feature && feature.description};"
        </div>;
    </section>;"
    icon: <Brain className="h - 10 w - 10 text - zion - cyan" />,"
    icon: <Clock className="h - 10 w - 10 text - zion - cyan" />,"
    icon: <Award className="h - 10 w - 10 text - zion - cyan" />,"
    icon: <Zap className="h - 10 w - 10 text - zion - cyan" />,"
    <section className="py - 16 bg - zion - blue">;"
      <div className="container mx - auto px - 4">;"
        <div className="text - center mb - 12">;"
          <h2 className="text - 3xl md:text - 4xl font - bold mb - 4">Powerful Features</h2>;""
          <p className="text - lg text - gray - 300 max - w-2xl mx - auto">;"
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 6">;"
            <Card key={index} className="bg - zion - blue - dark border - zion - purple / 30 hover:border - zion - cyan transition - colors duration - 300">;"

                <div className="mb - 4">{feature.icon}</div>;""
                <CardTitle className="text - white">{feature.title};"
                <CardDescription className="text - gray - 300">{feature.description};"
            ))}
    </section>);"
  icon: <Brain className="h-10 w-10 text-zion-cyan" />;"
  icon: <Clock className="h-10 w-10 text-zion-cyan" />;"
  icon: <Award className="h-10 w-10 text-zion-cyan" />;"
  icon: <Zap className="h-10 w-10 text-zion-cyan" />;"
  return (<section className="py-16 bg-zion-blue" > <div className="container mx-auto px-4" > <div className="text-center mb-12" > <h2 className="text-3xl md:text-4xl font-bold mb-4" >Powerful Features</h2> <p className="text-lg text-gray-300 max-w-2xl mx-auto" > Everything you love about Zion, now in your pocket. Our mobile app brings all the powerful features you need to succeed. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" > {"
</section>)
  features.map ( (feature, index) => (<Card key= {
  index;"
}className="bg-zion-blue-dark border-zion-purple/30 hover:border-zion-cyan transition-colors duration-300" > <CardHeader> <div className="mb-4" > {"
}</div> <CardTitle className="text-white" > {"
}  <CardContent> <CardDescription className="text-gray-300" > {"

} )
}</div> </div> </section>) ]"