
      }
;
      return await response.json(),;
    } catch (error) {;
      // Mock response for demo;
      return {;
        ...rule,;
        id:`rule_${Date.now()}`,;
        createdAt:new Date(),;
        updatedAt:new Date();
      },;
    }
  }

      }
;
      return await response.json(),;
    } catch (error) {;
      // Mock API key creation for demo;
      return {;
        id:`key_${Date.now()}`,;
        name,;
        key:`zion_${Math.random().toString(36).substr(2, 9)}`,;
        permissions,;
        rateLimit,;
        createdAt:new Date(),;
        lastUsed:new Date(),;
        isActive:true;
      },;
    }
  }

      'SLA guarantee';
    ];
  }
},; 'Authorization': `Bearer $ {
  this.apiKey
}`;
'Content-Type': 'application/json'
};
body: JSON.stringify (rule)
});
return {
  ...rule, id: `rule $ {
  Date.now ()
}`;
createdAt: new Date ();
updatedAt: new Date ()
}

