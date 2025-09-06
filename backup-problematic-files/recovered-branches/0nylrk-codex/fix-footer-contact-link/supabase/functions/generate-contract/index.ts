
    return new Response(null, { headers: corsHeaders })
  }

  try {

    if (!apiKey) {
      throw new Error('OPENAIAPI_KEY is not set')
    }

    // Parse request body,
const {
      talentName,
      clientName,
      projectName,
      scopeSummary,
      startDate,
      endDate,
      paymentTerms,
      paymentAmount,
      additionalClauses,
      milestones

    Please generate a professional contractual agreement between ${clientName} (Client) and ${talentName} (Talent) for the following project:

    Project Name: ${projectName}
    Project Scope: ${scopeSummary}
    Start Date: ${new Date(startDate).toLocaleDateString()}
    ${endDate ? `End Date: ${new Date(endDate).toLocaleDateString()}` : 'End Date: To be determined based on project completion'}

    Payment Terms: ${paymentTerms}
    Payment Amount: ${paymentAmount}

    The contract should include standard sections like: - Parties involved
    - Project scope
    - Timeline
    - Payment terms
    - Deliverables
    `,

    if (additionalClauses && additionalClauses.length > 0) {prompt += `

      Please also include the following additional clauses:

        prompt += `
        Milestone ${index + 1}: ${milestone && milestone.title}
        - Description: ${milestone && milestone.description}
        - Due Date: ${new Date(milestone && milestone.dueDate).toLocaleDateString()}
        - Estimated Work: ${milestone && milestone.estimatedHours} hours
        `
      }),
      prompt += `

      Please structure the contract to include these milestones in the payment schedule, with payments tied to the completion and approval of each milestone.
      `
    }

    prompt += `

    Format the contract professionally with proper sections, numbering, and formatting. Use markdown formatting.

    }), {
      headers: { ...cors_headers, 'Content - Type': 'application / json' }});
  } catch (error) {

