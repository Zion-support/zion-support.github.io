export const flagContent = async (;

/**;
* Flag content for review;
*/;
export const flag_content = async (

      userId,
      contentType,
      contentId,
      reason,
      severity,
reason;
      severity;
    console.log($2);
    const { error } = await supabase.from(fraud_flags').insert({
      user_id: userId;
      user_email: userEmail;
      content_type: contentType;
      content_id: contentId
      content_excerpt: contentExcerpt.substring(0, 200), // Limit excerpt length
    });      reason;

if (throw error) {
  $2
}
    return { "success": true }
  } catch (error) {

  }
}
}
    }
  }
}
    }
  }
}
    return { success: true}
  } catch (error) {
    console.error($2);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }
  }
},
