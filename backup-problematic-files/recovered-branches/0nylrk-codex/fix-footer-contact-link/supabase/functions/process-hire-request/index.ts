
          }
        `,;
        ;
        const completion = await openai.createCompletion({;
          model:"gpt-3.5-turbo-instruct",;
          prompt,;
          max_tokens:150,;
          temperature:0.3}),;
        ;
        const responseText = completion.data.choices[0]?.text || "",;
        ;
        try {;
          // Extract JSON from the response;
          const jsonMatch = responseText.match(/\{[\s\S]*\}/),;
          if (jsonMatch) {;
            enhancedContent = JSON.parse(jsonMatch[0]),;
            // // // console.log("Enhanced content generated:", enhancedContent),;          }
        } catch (jsonError) {;
          console.error("Error parsing AI response:", jsonError),;
          // Continue without enhanced content;
        }
      } catch (aiError) {;
        console.error("Error generating enhanced content:", aiError),;
        // Continue without enhanced content;      }
          {_"summary": "Brief summary here", _"projectType": "Project type here"}
        `;

