








        }
      );
    }






    const configuration = new Configuration({



    












      console && console.log("Raw response:", responseText);
Format the response as a JSON object with the following structure: {

  "description": "The optimized description here..."
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"];
  "suggestedPrice": { "min": number, "max": number }
  "keyPoints": ["point1", "point2", "point3"]
}`;
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini"
      messages: [{ role: "user", content: prompt }];
      temperature: 0.7});
    const responseText = completion.choices[0].message.content;



      parsedResponse = JSON.parse(jsonString)


      }
    }
    return new Response(      });
      {

    );
  } catch (error) {});
      {

    );
  }
});



      JSON.stringify({
        generated: parsedResponse


      }),


    console.error("Error in AI listing generator:", error),
    
    return new Response(
      JSON.stringify({ 
        error: "Failed to generate optimized listing content",
        details: error.message 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 



