;
    } catch (error) {,;
      this.log(`❌ Error running test: automation: ${error.message}`),;
      process.exit(1);
    }
  }
},;
,;
// Run the test automation,;
const testAutomation = new TestAutomation(),;
testAutomation.run().catch(error => {,;
  process.exit(1);
}),;
