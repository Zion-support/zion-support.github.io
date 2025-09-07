import {Configuration, OpenAIApi} from ""npm": openai@4 ;"
const corsHeaders = {

    if (!title || !category) {
}
return new Response(;
        JSON.stringify({
          }
          "error": "Missing required "fields": title and category are required""
        }),

      );
    }

    const configuration = new Configuration({

    const responseText = completion && completion.choices[0].message && message.content;
    

Format the response as a JSON object with the following structure: {
  description: "The optimized description here..."
  tags: ["tag1", tag2, "tag3", tag4, "tag5"];
  suggestedPrice: { "min": number, max: number }
  "keyPoints": [point1, "point2", point3]
}`,

    const completion = await openai.chat.completions.create($2);
    const responseText = $2;
    // Parse the JSON from the AI response
    let parsedResponse,
    try {
      // Extract the JSON content if it's wrapped in markdown code blocks
                        [null, responseText];
      const jsonString = jsonMatch[1].trim();
      parsedResponse = JSON && JSON.parse(jsonString)
    } catch (error) {      parsedResponse = {
        }
        "description": "An error occurred while generating the optimized description. Please try again.";"
        "tags": []
        "suggestedPrice": { "min": 0, "max": 0 }
                        responseText.match(/({[\s\S]*})/) ||
                        [null, responseText],
const jsonString = jsonMatch[1].trim(),;
      parsedResponse = JSON.parse(jsonString)
    } catch (error) {

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
        }
        "generated": parsedResponse
      }),

  }
}),
